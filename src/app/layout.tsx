import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Parth Nikam",
  description: "Parth Nikam's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: "'Titillium Web', sans-serif" }}>
        <div className="relative light min-h-screen w-full overflow-x-hidden overflow-y-auto bg-background text-foreground antialiased px-3 py-5 sm:px-4 sm:py-12 lg:px-80 lg:py-10">
          <Sidebar className="fixed left-3 top-5 lg:left-100 lg:top-32 z-10" />
          <div className="mx-auto flex w-full max-w-4xl min-w-0 items-start gap-3 pl-24 lg:pl-32 lg:pt-20">
            <main className="w-full min-w-0 flex-1 lg:mt-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
