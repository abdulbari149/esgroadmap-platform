"use client";
import { Sidebar as ReactSidebar, Menu, MenuItem } from "react-pro-sidebar";

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
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Colors from "@/styles/colors";

const sideBarNavigation = [
	{
		id: 1,
		name: "Dashboard",
		icon: LayoutDashboardIcon,
		link: "/dashboard",
	},
	{
		id: 2,
		name: "Percentages",
		icon: Percent,
		link: "/dashboard/percentages",
	},
	{
		id: 3,
		name: "Company Universe",
		icon: Building2,
		link: "/dashboard/company-universe",
	},
	{
		id: 4,
		name: "Unique Factors",
		icon: ScrollText,
		link: "/dashboard/unique-factors",
	},
	{
		id: 5,
		name: "Target Sentences",
		icon: TargetIcon,
		link: "/dashboard/target-sentences",
	},
	{
		id: 6,
		name: "Sentence All",
		icon: CombineIcon,
		link: "/dashboard/sentence-all",
	},
	{
		id: 6,
		name: "Roadmap Carbon",
		icon: CableCarIcon,
		link: "/dashboard/roadmap-carbon",
	},
];

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);
	const pathname = usePathname();

	const full = !collapsed;

	const HeaderIcon = collapsed ? MenuIcon : CloseIcon;

	return (
		<ReactSidebar
			collapsed={collapsed}
			width={"20vw"}
			style={{ backgroundColor: Colors.white }}
			transitionDuration={800}
			rootStyles={{ position: "static", height: "100vh", maxHeight: "100vh" }}
		>
			<header className="min-h-[20vh] flex flex-row items-center justify-between px-[2vw]">
				{full && <Logo />}
				<div
					onClick={() => setCollapsed((prev) => !prev)}
					className="cursor-pointer transition-all"
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
					return (
						<MenuItem
							key={nav.id}
							component={<Link href={nav.link} />}
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
