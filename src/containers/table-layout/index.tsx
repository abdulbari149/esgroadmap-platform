import React from "react";

const TableLayout: React.FC<{
	children: React.ReactNode;
	title: string;
}> = async ({ title, children }) => {
	return (
		<div className="w-full py-10 px-10 overflow-x-hidden">
			<h1 className="font-semibold text-[20px] my-[20px]">{title}</h1>
			{children}
		</div>
	);
};

export default TableLayout;
