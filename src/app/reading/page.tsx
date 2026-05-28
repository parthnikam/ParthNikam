import { readFileSync } from "fs"
import path from "path"

type Book = {
  title: string
  tag: string
  url: string
}

type BooksByTag = {
  tag: string
  books: Book[]
}

const BOOKS_FILE = path.join(process.cwd(), "src", "app", "reading", "BOOKS.md")
const BOOK_BASE_URL = process.env.BOOK_BASE_URL ?? ""
const PERSONAL_FAVORITES_TAG = "personal_favorites"

function toUrlBookName(title: string) {
  const bookName = title.trim().endsWith(".pdf") ? title.trim() : `${title.trim()}.pdf`

  return bookName.replaceAll(" ", "%20")
}

function getBookUrl(tag: string, title: string) {
  return `${BOOK_BASE_URL}/${tag}/${toUrlBookName(title)}`
}

function parseBooksTable(markdown: string): Book[] {
  return markdown
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|") && line.endsWith("|"))
    .slice(2)
    .map((line) => {
      const [title = "", tag = ""] = line
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim())

      return { title, tag }
    })
    .filter(({ title, tag }) => title && tag)
    .map(({ title, tag }) => ({
      title,
      tag,
      url: getBookUrl(tag, title),
    }))
}

function getBooksByTag(): BooksByTag[] {
  const markdown = readFileSync(BOOKS_FILE, "utf8")
  const groupedBooks = new Map<string, Book[]>()

  for (const book of parseBooksTable(markdown)) {
    const books = groupedBooks.get(book.tag) ?? []
    books.push(book)
    groupedBooks.set(book.tag, books)
  }

  return Array.from(groupedBooks, ([tag, books]) => ({
    tag,
    books: books.sort((firstBook, secondBook) =>
      firstBook.title.localeCompare(secondBook.title)
    ),
  })).sort((firstGroup, secondGroup) => {
    if (firstGroup.tag === "reading_now") return -1
    if (secondGroup.tag === "reading_now") return 1

    return firstGroup.tag.localeCompare(secondGroup.tag)
  })
}

function BookLink({ book, className = "text-base" }: { book: Book; className?: string }) {
  return (
    <li>
      <a
        href={book.url}
        target="_blank" rel="noopener noreferrer"
        className={`book-link ${className} leading-relaxed text-muted-foreground transition-colors hover:text-foreground`}
      >
        {book.title}
      </a>
    </li>
  )
}

function BookGroup({ group, compact = false }: { group: BooksByTag; compact?: boolean }) {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold text-foreground">{group.tag}</h2>
        <p className="text-sm text-muted-foreground">{group.books.length} books</p>
      </div>
      <ul className="space-y-1 border-l border-border pl-4">
        {group.books.map((book) => (
          <BookLink
            key={`${book.tag}-${book.title}`}
            book={book}
            className={compact ? "text-sm" : "text-base"}
          />
        ))}
      </ul>
    </section>
  )
}

export default function Reading() {
  const booksByTag = getBooksByTag()
  const personalFavorites = booksByTag.find(
    (group) => group.tag === PERSONAL_FAVORITES_TAG
  )
  const regularBooksByTag = booksByTag.filter(
    (group) => group.tag !== PERSONAL_FAVORITES_TAG
  )

  return (
    <div className="flex flex-col h-full">
      {personalFavorites ? (
        <aside className="fixed sm:hidden right-20 top-36 hidden max-h-[calc(100vh-10rem)] w-64 overflow-auto xl:block">
          <BookGroup group={personalFavorites} compact />
        </aside>
      ) : null}

      <div className="max-w-2xl w-full">
        <style>{`
          @keyframes underlineAnimation {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          .book-link {
            position: relative;
            text-decoration: none;
          }
          .book-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 1px;
            background-color: currentColor;
            transition: width 0.3s ease;
          }
          .book-link:hover::after {
            animation: underlineAnimation 0.3s ease forwards;
          }
        `}</style>

        <div className="space-y-8 pb-10">
          {regularBooksByTag.map((group) => (
            <BookGroup key={group.tag} group={group} />
          ))}
        </div>
      </div>
    </div>
  )
}
