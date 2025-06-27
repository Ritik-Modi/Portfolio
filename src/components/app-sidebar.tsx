import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  FileText,
  Mail,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import ResumeDownloader from "@/components/ResumeDownloader";
import NavFooter from "@/components/NavFooter";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

// Menu items
const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: Inbox },
  { title: "Skill", url: "/skill", icon: Calendar },
  { title: "Projects", url: "/projects", icon: Search },
  { title: "Services", url: "/services", icon: Settings },
  { title: "Resume", url: "/resume", icon: FileText },
  { title: "Contact", url: "/contact", icon: Mail },
];

export default function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const [isMobile, setIsMobile] = useState(false);

  // Detect if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Sidebar side="right" className="border-none md:border-none h-screen">
      <SidebarContent className="bg-base text-white flex flex-col justify-between h-full px-4 py-6">
        {/* Top section */}
        <div className="flex flex-col gap-6">
          <SidebarGroup>
            <ResumeDownloader />
          </SidebarGroup>

          <Separator className="bg-box" />

          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col gap-6">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <NavLink to={item.url}>
                      {({ isActive }) => (
                        <SidebarMenuButton
                          asChild
                          className={`text-base md:text-lg lg:text-xl transition-colors duration-200 hover:bg-transparent hover:text-lightText active:bg-transparent ${
                            isActive ? "text-lightText" : "text-white"
                          }`}
                        >
                          <a
                            className="flex gap-2 items-center"
                            onClick={() => {
                              if (isMobile) toggleSidebar(); // ✅ collapse only on mobile
                            }}
                          >
                            <item.icon className="w-5 h-5" />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      )}
                    </NavLink>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Footer */}
        <div>
          <Separator className="bg-box mb-4" />
          <SidebarGroup>
            <NavFooter />
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
