"use client";
import {
	Sidebar as ReactSidebar,
	Menu,
	MenuItem,
	SubMenu,
} from "react-pro-sidebar";

import Link from "next/link";

import {
	LayoutDashboardIcon,
	Percent,
	Building2,
	X as CloseIcon,
	Menu as MenuIcon,
	ScrollText,
	TargetIcon,
	CableCarIcon,
	CombineIcon,
	PenToolIcon,
	AlarmSmokeIcon,
	Building2Icon,
	BiohazardIcon,
	RecycleIcon,
	ContainerIcon,
	RibbonIcon,
	AtomIcon,
	UserCircle,
	MessageSquareText,
	LogOutIcon,
} from "lucide-react";
import React, { useState } from "react";
import { redirect, usePathname } from "next/navigation";
import Logo from "./logo";
import Colors from "@/styles/colors";
import useMediaQuery from "@/hooks/use-media-query";
import auth from "@/api/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type SidebarItemWithoutSubMenu = {
	id: number;
	name: string;
	icon: any;
	link: string;
};

type SidebarItem = SidebarItemWithoutSubMenu & {
	submenus?: SidebarItemWithoutSubMenu[];
};

const sideBarNavigation: SidebarItem[] = [
	{
		id: 1,
		name: "Dashboard",
		icon: LayoutDashboardIcon,
		link: "/dashboard",
	},
	{
		id: 2,
		name: "Carbon Reduction",
		link: "/dashboard/targets/carbon-reduction",
		icon: BiohazardIcon,
	},
	{
		id: 2,
		name: "All Company",
		link: "/dashboard/targets/all-company",
		icon: Building2Icon,
	},
	{
		id: 3,
		name: "Waste & Recycling",
		link: "/dashboard/targets/waste-&-recycling",
		icon: RecycleIcon,
	},
	{
		id: 4,
		name: "Water Management",
		link: "/dashboard/targets/water-management",
		icon: CableCarIcon,
	},
	{
		id: 5,
		name: "Supply Chain",
		link: "/dashboard/targets/supply-chain",
		icon: ContainerIcon,
	},
	{
		id: 6,
		name: "Gender Diversity",
		link: "/dashboard/targets/gender-diversity",
		icon: RibbonIcon,
	},
	{
		id: 7,
		name: "Renewables",
		link: "/dashboard/targets/renewables",
		icon: AtomIcon,
	},
	{
		id: 10,
		name: "Support Tickets",
		link: "/dashboard/tickets",
		icon: UserCircle,
	},
	{
		id: 8,
		name: "Account",
		link: "/dashboard/account",
		icon: UserCircle,
	},
	{
		id: 8,
		name: "FAQs",
		link: "/dashboard/faqs",
		icon: MessageSquareText,
	},
	{
		id: 8,
		name: "Logout",
		link: "/auth/login",
		icon: LogOutIcon,
	},
];

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);
	const pathname = usePathname();
	const { isLargeDevice, isExtraLargeDevice, isMediumDevice, isSmallDevice } =
		useMediaQuery();
	const router = useRouter();
	const full = !collapsed && isExtraLargeDevice;

	const HeaderIcon = !full ? MenuIcon : CloseIcon;

	return (
		<ReactSidebar
			collapsed={collapsed || isMediumDevice || isSmallDevice || isLargeDevice}
			width={"20vw"}
			style={{ backgroundColor: Colors.white }}
			transitionDuration={800}
			rootStyles={{ position: "static", height: "100vh", maxHeight: "100vh" }}
		>
			<header className="min-h-[20vh] flex flex-row items-center justify-between px-[2vw]">
				{full && <Logo />}
				<div
					onClick={() => setCollapsed((prev) => !prev)}
					className="cursor-pointer transition-all mx-auto xl:mx-0"
				>
					<HeaderIcon size={20} color="#000000" className="cursor-pointer" />
				</div>
			</header>

			<Menu>
				{sideBarNavigation.map((nav) => {
					const isActive = pathname === nav.link;
					const Icon = nav.icon;

					const styles = {
						color: isActive ? Colors.white : Colors.black,
						backgroundColor: isActive ? Colors.secondary : "transparent",
					};

					if (!collapsed && nav.submenus && nav.submenus.length > 0) {
						return (
							<SubMenu
								active={isActive}
								icon={<Icon size={20} color={styles.color} />}
								key={nav.id}
								label={nav.name}
								style={styles}
								component={<Link href={nav.submenus?.[0].link} />}
								open={pathname.startsWith(nav.link)}
							>
								{nav.submenus.map((submenu) => {
									const isSubmenuActive = submenu.link === pathname;
									const SubMenuIcon = submenu.icon;
									const submenuStyles = {
										color: isSubmenuActive ? Colors.white : Colors.black,
										backgroundColor: isSubmenuActive
											? Colors.secondary
											: "transparent",
									};

									return (
										<MenuItem
											key={submenu.id}
											component={<Link href={submenu.link} />}
											active={isSubmenuActive}
											icon={
												<SubMenuIcon size={20} color={submenuStyles.color} />
											}
											style={submenuStyles}
										>
											{submenu.name}
										</MenuItem>
									);
								})}
							</SubMenu>
						);
					}
					return (
						<MenuItem
							key={nav.id}
							component={
								nav.name !== "Logout" ? <Link href={nav.link} /> : undefined
							}
							onClick={() => {
								if (nav.name === "Logout") {
									setTimeout(async () => {
										try {
											const message = await auth.logout();
											router.replace("/auth/login");
											toast.success(message);
										} catch (error) {}
									}, 500);
								}
							}}
							active={isActive}
							icon={<Icon size={20} color={styles.color} />}
							style={styles}
						>
							{!collapsed ? nav.name : ""}
						</MenuItem>
					);
				})}
			</Menu>
		</ReactSidebar>
	);
};

export default Sidebar;
