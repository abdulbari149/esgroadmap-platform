"use client";
import React, { useState } from "react";
import { DataTable as PRDataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";

type DataTableProps<TRow extends object> = {
	data: TRow[];
	columns: React.ComponentProps<typeof Column>[];
};

function DataTable<TRow extends object>(props: DataTableProps<TRow>) {
	const [loading, setLoading] = useState(false);
	const renderHeader = () => {
		return <></>;
	};

	const header = renderHeader();

	return (
		<div className="bg-white border border-gray-200 rounded-lg shadow w-100 flex-1">
			<PRDataTable
				value={props.data}
				paginator
				rows={10}
				loading={loading}
				dataKey="id"
				emptyMessage="No data found."
			>
				{props.columns.map((col, index) => (
					<Column
						key={index}
						columnKey={index.toString()}
						{...col}
						className="py-2"
					/>
				))}
			</PRDataTable>
		</div>
	);
}

export default DataTable;
