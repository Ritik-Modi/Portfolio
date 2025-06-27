import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-base">
        {/* Main content area */}
        <main className="flex flex-col flex-1 min-h-screen py-1 text-white">
          <div className="flex items-center gap-2 px-4 py-2">
            {/* Mobile-only Sidebar toggle */}
            <SidebarTrigger className="block md:hidden" />
            <h1 className="font-extrabold">RITIK MODI</h1>
          </div>

          <Separator className="bg-box mb-4" />

          {children}
        </main>

        {/* Sidebar always visible on desktop */}
        <AppSidebar />
      </div>
    </SidebarProvider>
  );
}
