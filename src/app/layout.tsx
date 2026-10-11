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
        <div className="light min-h-screen w-full overflow-x-hidden bg-background text-foreground antialiased px-4 py-6 sm:px-6 sm:py-12">
          <div className="mx-auto flex w-full max-w-4xl items-start gap-2 lg:mt-16">
            <Sidebar />
            <main className="w-full min-w-0 flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
