import React from "react";

import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/sidebar"), { ssr: false });

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-row overflow-hidden">
			<Sidebar />
			<div className="overflow-y-auto overflow-x-hidden w-[100%]">
				{children}
			</div>
		</div>
	);
};

export default ProtectedLayout;
