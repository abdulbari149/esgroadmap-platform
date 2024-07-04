import calculateWidthBasedOnWordLength from "@/utils/calculate-width";
import { useMemo, useState } from "react";
import dbColumns from "@/constants/columns";
import { Column } from "primereact/column";
import Link from "next/link";
import { FilterMatchMode } from "primereact/api";
import { MultiSelect } from "primereact/multiselect";
import columns from "@/constants/columns";

const filters = {
	ID: FilterMatchMode.CONTAINS,
	Company: FilterMatchMode.CONTAINS,
	"Target Sentence": FilterMatchMode.CONTAINS,
	"Target Year(s)": FilterMatchMode.CONTAINS,
	Country: FilterMatchMode.IN,
	"sector code #1 (NAICS)": FilterMatchMode.CONTAINS,
	"sector name #1 (NAICS)": FilterMatchMode.CONTAINS,
	"Upload Date": FilterMatchMode.CONTAINS,
};
const representatives = [
	{ name: "Amy Elsner", image: "amyelsner.png" },
	{ name: "Anna Fali", image: "annafali.png" },
	{ name: "Asiya Javayant", image: "asiyajavayant.png" },
	{ name: "Bernardo Dominic", image: "bernardodominic.png" },
	{ name: "Elwin Sharvill", image: "elwinsharvill.png" },
	{ name: "Ioni Bowcher", image: "ionibowcher.png" },
	{ name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
	{ name: "Onyama Limba", image: "onyamalimba.png" },
	{ name: "Stephen Shaw", image: "stephenshaw.png" },
	{ name: "XuXue Feng", image: "xuxuefeng.png" },
];

const representativesItemTemplate = (option: any) => {
	return (
		<div className="flex align-items-center gap-2">
			<span>{option.name}</span>
		</div>
	);
};

const representativeFilterTemplate = (options: any) => {
	return (
		<MultiSelect
			value={options.value}
			options={representatives}
			itemTemplate={representativesItemTemplate}
			onChange={(e) => options.filterCallback(e.value)}
			optionLabel="name"
			placeholder="Any"
			className="p-column-filter"
		/>
	);
};

const columnFilterElements = {
	[columns.TargetSentenceView.Country]: representativeFilterTemplate,
};

const useTargetTable = <T extends object>(data: Array<T>) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedTargetSentence, setSelectedTargetSentence] = useState("");

	const columns = useMemo(() => {
		if (data.length === 0) return [];

		return Object.keys(data[0]).map((key) => {
			const hasEnoughSpaces = key.split(" ").length > 4;

			let width =
				calculateWidthBasedOnWordLength(key, hasEnoughSpaces ? 2 : 1) + 40;

			let limit = 10000;

			if (key === dbColumns.TargetSentenceView.Target_sentence) {
				limit = 100;
				width += 200;
			}

			const options = {
				header: () => {
					return (
						<div
							style={{
								width: width,
								textAlign: "center",
							}}
						>
							{key}
						</div>
					);
				},
				field: key,
				body: (row: any) => {
					let value = row[key];

					if (value === null) {
						return "N/A";
					}

					if (key === dbColumns.TargetSentenceView.DocURL) {
						return (
							<Link
								href={value}
								target="_blank"
								className="text-blue-600 text-[15px]"
							>
								Click Here
							</Link>
						);
					}

					if (key === dbColumns.TargetSentenceView.Target_sentence) {
						return (
							<span
								onClick={() => {
									setShowModal(true);
									setSelectedTargetSentence(value);
								}}
								className="cursor-pointer"
							>
								{value.length > limit ? value.slice(0, limit) + "..." : value}
							</span>
						);
					}

					if (value instanceof Date) {
						return <span>{value.toLocaleDateString()}</span>;
					}

					// value = value?.trim();

					return (
						<span>
							{value.length > limit ? value.slice(0, limit) + "..." : value}
						</span>
					);
				},
				headerStyle: { paddingLeft: 0, paddingRight: 0 },
				bodyStyle: { paddingLeft: 0, paddingRight: 0 },
				headerClassName:
					"text-[14px] text-center items-center py-2 font-semibold",
				bodyClassName: "text-[14px] px-2 py-2 text-center",
				sortable: true,
				filter: key in filters,
				filterHeaderStyle:
					key in filters
						? {
								minWidth: width + 100,
						  }
						: {},
				showFilterMenuOptions: false,
				showFilterMenu: false,
			} as React.ComponentProps<typeof Column>;

			if (
				key in filters &&
				filters[key as keyof typeof filters] === FilterMatchMode.IN
			) {
				options.filterElement =
					columnFilterElements[key as keyof typeof columnFilterElements];
			}

			return options;
		});
	}, [data]);

	return {
		columns,
		showTargetModel: showModal,
		setShowTargetModal: setShowModal,
		selectedTargetSentence,
		filters,
	};
};

export default useTargetTable;
