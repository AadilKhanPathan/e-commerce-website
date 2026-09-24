"use client"

import * as React from "react"
import { useSession } from "next-auth/react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { RowsIcon, WaveformIcon, CommandIcon, TerminalIcon, RobotIcon, BookOpenIcon, GearIcon, CropIcon, ChartPieIcon, MapTrifoldIcon, UserCircleGearIcon, FileMagnifyingGlassIcon   } from "@phosphor-icons/react"
import { UserPen, ChartBarStacked  } from "lucide-react"



// This is sample data.
const data = {
  user: {
    name: "Aadil",
    email: "Aadil@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: (
        <RowsIcon
        />
      ),
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: (
        <WaveformIcon
        />
      ),
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: (
        <CommandIcon
        />
      ),
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Admin",
      url: "#",
      icon: (
        <UserPen
        />
      ),
      isActive: true,
      items: [
        {
          title: "Add Item",
          url: "/additem",
        },
        {
          title: "List Items",
          url: "/listitem",
        },
        {
          title: "Customers",
          url: "#",
        },
      ],
    },
    {
      title: "Category",
      url: "#",
      icon: (
        <ChartBarStacked 
        />
      ),
      items: [
        {
          title: "Men",
          url: "#",
        },
        {
          title: "Women",
          url: "#",
        },
        {
          title: "Unisex",
          url: "#",
        },
      ],
    },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: (
    //     <BookOpenIcon
    //     />
    //   ),
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: (
    //     <GearIcon
    //     />
    //   ),
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    // {
    //   name: "Design Engineering",
    //   url: "#",
    //   icon: (
    //     <CropIcon
    //     />
    //   ),
    // },
    // {
    //   name: "Sales & Marketing",
    //   url: "#",
    //   icon: (
    //     <ChartPieIcon
    //     />
    //   ),
    // },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: (
    //     <MapTrifoldIcon
    //     />
    //   ),
    // },
  ],
}

export function AppSidebar({
  ...props
})  {
   const { data: session, status } = useSession();
   console.log(session)
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
