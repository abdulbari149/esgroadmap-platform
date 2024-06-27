import Sidebar from "@/components/sidebar";
import React from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-row overflow-hidden">
			<Sidebar />
			<div className="overflow-y-auto">{children}</div>
		</div>
	);
};

export default ProtectedLayout;
