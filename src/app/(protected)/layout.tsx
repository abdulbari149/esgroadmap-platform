"use server";
import React from "react";
import dynamic from "next/dynamic";
import { currentUser } from "@/functions/user";
import NextTopLoader from "nextjs-toploader";

const Sidebar = dynamic(() => import("@/components/sidebar"), { ssr: false });

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
	const { user } = await currentUser();

	return (
		<div className="flex flex-row overflow-hidden">
			<Sidebar user={user} />
			<div className="overflow-y-auto overflow-x-hidden w-[100%]">
				{children}
			</div>
			<NextTopLoader color="#219e98" showSpinner={false} />
		</div>
	);
};

export default ProtectedLayout;
