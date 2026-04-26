import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "ExamPro - Premium Mock Tests",
  description: "Prepare for SSC, Railway, State Police, and Defence exams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0f172a] text-slate-50">
        <TopNav />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 overflow-x-hidden p-6 md:p-10 relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
