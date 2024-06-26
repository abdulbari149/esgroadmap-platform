"use client";
import React, { useRef, useState } from "react";
import { DataTable as PRDataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { FilterMatchMode } from "primereact/api";
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';


type DataTableProps<TRow extends object> = {
	title: string;
	data: TRow[];
	columns: React.ComponentProps<typeof Column>[];
	filters?: Record<string, FilterMatchMode>
};

function DataTable<TRow extends object>(props: DataTableProps<TRow>) {
	const [loading, setLoading] = useState(false);
	const dt = useRef<PRDataTable<TRow[]> | null>(null);
	const [filters, setFilters] = useState(() => {
		let tableFilters = {
			global: { value: null, matchMode: FilterMatchMode.CONTAINS },
		}

		if (props.filters) {
			const { filters: propFilters } = props;
			const dynamicFilters = Object.keys(propFilters).reduce((prev, current) => {
				const matchMode = propFilters[current];
				return {
					...prev,
					[current]: { value: null, matchMode }
				}
			}, {} as Record<string, { value: any; matchMode: FilterMatchMode }>)

			tableFilters = {
				...tableFilters,
				...dynamicFilters,
			}
		}
		return tableFilters;
	});

	console.log({ filters })
	const [globalFilterValue, setGlobalFilterValue] = useState('');


	const exportPdf = () => {
		// import("jspdf").then((jsPDF) => {
		// 	import("jspdf-autotable").then(() => {
		// 		const doc = new jsPDF.default(0, 0);
		// 		doc.autoTable(exportColumns, products);
		// 		doc.save("products.pdf");
		// 	});
		// });
	};

	const exportExcel = () => {
		// import("xlsx").then((xlsx) => {
		// 	const worksheet = xlsx.utils.json_to_sheet(props.data);
		// 	const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
		// 	const excelBuffer = xlsx.write(workbook, {
		// 		bookType: "xlsx",
		// 		type: "array",
		// 	});
		// 	saveAsExcelFile(excelBuffer, "products");
		// });
	};

	const saveAsExcelFile = (buffer: any, fileName: string) => {
		// import("file-saver").then((module) => {
		// 	if (module && module.default) {
		// 		let EXCEL_TYPE =
		// 			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
		// 		let EXCEL_EXTENSION = ".xlsx";
		// 		const data = new Blob([buffer], {
		// 			type: EXCEL_TYPE,
		// 		});
		// 		module.default.saveAs(
		// 			data,
		// 			fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
		// 		);
		// 	}
		// });
	};

	const exportCSV = (selectionOnly: boolean) => {
		if (!dt.current) return;
		dt.current.exportCSV({ selectionOnly });
	};

	const onGlobalFilterChange = (e: any) => {
		const value = e.target.value;
		let _filters = { ...filters };

		_filters['global'].value = value;

		setFilters(_filters);
		setGlobalFilterValue(value);
	};
	const header = (
		<div className="flex items-center justify-between">
			<h1 className="font-semibold text-[20px] my-[20px]">{props.title}</h1>
			<div className="flex items-center justify-end gap-2">
				<Button
					type="button"
					icon="pi pi-file"
					rounded
					onClick={() => exportCSV(false)}
					data-pr-tooltip="CSV"
				/>
				{/* <Button
					type="button"
					icon="pi pi-file-excel"
					severity="success"
					rounded
					onClick={exportExcel}
					data-pr-tooltip="XLS"
				/>
				<Button
					type="button"
					icon="pi pi-file-pdf"
					severity="warning"
					rounded
					onClick={exportPdf}
					data-pr-tooltip="PDF"
				/> */}
				<IconField iconPosition="left">
					<InputIcon className="pi pi-search" />
					<InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
				</IconField>
			</div>
		</div>
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
				header={header}
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
					CurrentPageReport(options) {
						return options.element;
					},
					FirstPageLink(options) {
						return options.element;
					},
					PageLinks(options) {
						let page = options.page + 1;
						if (options.currentPage + 1 - page > 3) {
							return <span className={options.className}>-1</span>;
						}

						return <span className={options.className}>{page}</span>;
					},
					LastPageLink(options) {
						return options.element;
					},
					NextPageLink(options) {
						return options.element;
					},
				}}
				paginatorPosition="bottom"
				tableStyle={{ minWidth: "50rem" }}
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
