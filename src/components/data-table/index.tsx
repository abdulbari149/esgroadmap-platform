"use client";
import React, { useCallback, useRef, useState } from "react";
import {
	DataTableFilterMetaData,
	DataTable as PRDataTable,
} from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import Header from "./header";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { toast } from "react-toastify";
import SaveFilterDialog from "./save-filter";
import ApplyFilterDialog from "./apply-filter";

type DataTableProps<TRow extends object> = {
	tableName: string;
	data: TRow[];
	columns: React.ComponentProps<typeof Column>[];
	filters?: Record<string, FilterMatchMode>;
};

function DataTable<TRow extends object>(props: DataTableProps<TRow>) {
	const [loading, setLoading] = useState(false);
	const dt = useRef<PRDataTable<TRow[]> | null>(null);
	const [filters, setFilters] = useState<
		Record<string, DataTableFilterMetaData>
	>(() => {
		let tableFilters = {
			global: { value: null, matchMode: FilterMatchMode.CONTAINS },
		};

		if (props.filters) {
			const { filters: propFilters } = props;
			const dynamicFilters = Object.keys(propFilters).reduce(
				(prev, current) => {
					const matchMode = propFilters[current];
					return {
						...prev,
						[current]: { value: null, matchMode },
					};
				},
				{} as Record<string, { value: any; matchMode: FilterMatchMode }>
			);

			tableFilters = {
				...tableFilters,
				...dynamicFilters,
			};
		}
		return tableFilters;
	});

	const [showDialogs, setShowDialogs] = useState({
		save: false,
		apply: false,
	});

	const setDialogValue = useCallback(
		(key: keyof typeof showDialogs, value: boolean) => {
			setShowDialogs((prev) => {
				return { ...prev, [key]: value };
			});
		},
		[]
	);

	const [globalFilterValue, setGlobalFilterValue] = useState("");

	const onGlobalFilterChange = (e: any) => {
		const value = e.target.value;
		let _filters = { ...filters };

		_filters["global"].value = value;

		setFilters(_filters);
		setGlobalFilterValue(value);
	};

	const onFilterOptionSelect = useCallback(
		async (option: string) => {
			console.log({ filters });
			if (option === "save") {
				if (
					Object.keys(filters).filter(
						(key) => filters[key as keyof typeof filters].value
					).length === 0
				) {
					toast.error("Please select some filters first");
					return;
				}
				setDialogValue("save", true);
			} else if (option === "apply") {
				setDialogValue("apply", true);
			}
		},
		[filters, setDialogValue]
	);

	return (
		<div className="bg-white border border-gray-200 rounded-lg shadow w-100 flex-1">
			<PRDataTable
				value={props.data}
				ref={dt}
				paginator
				rows={10}
				loading={loading}
				dataKey="id"
				emptyMessage="No data found."
				pageLinkSize={6}
				header={
					<Header
						globalFilterValue={globalFilterValue}
						onGlobalFilterChange={onGlobalFilterChange}
						onDownloadOptionSelect={async (option) => {
							if (option === "csv") {
							}
						}}
						onFilterOptionSelect={onFilterOptionSelect}
					/>
				}
				filters={filters}
				globalFilterFields={props.filters ? Object.keys(props.filters) : []}
				filterDisplay="row"
				alwaysShowPaginator
				showGridlines
				stripedRows
				rowsPerPageOptions={[10, 50, 100, 150]}
				exportFilename={Date.now().toString()}
				paginatorTemplate={{
					layout:
						"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport",
				}}
				paginatorPosition="bottom"
				tableStyle={{ minWidth: "50rem" }}
				onFilter={(event) => {
					setFilters(event.filters as any);
				}}
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
			<SaveFilterDialog
				filters={filters}
				onClose={() => setDialogValue("save", false)}
				show={showDialogs.save}
				tableName={props.tableName}
			/>
			<ApplyFilterDialog
				onClose={() => setDialogValue("apply", false)}
				show={showDialogs.apply}
				tableName={props.tableName}
				applyFilter={(filters) => {
					setFilters(filters);
				}}
			/>
		</div>
	);
}

export default DataTable;
