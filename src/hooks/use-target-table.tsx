import calculateWidthBasedOnWordLength from "@/utils/calculate-width";
import { useMemo, useState } from "react";
import dbColumns from "@/constants/columns";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const useTargetTable = <T extends object>(data: Array<T>) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedTargetSentence, setSelectedTargetSentence] = useState("");

	const columns = useMemo(() => {
		if (data.length === 0) return [];

		return Object.keys(data[0]).map((key) => {
			const hasEnoughSpaces = key.split(" ").length > 4;

			let width =
				calculateWidthBasedOnWordLength(key, hasEnoughSpaces ? 2 : 1) + 20;

			let limit = 10000;

			if (key === dbColumns.TargetSentenceView.Target_sentence) {
				limit = 100;
				width += 200;
			}

			return {
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

					value = value.trim();

					return (
						<span>
							{value.length > limit ? value.slice(0, limit) + "..." : value}
						</span>
					);
				},
				headerStyle: { paddingLeft: 0, paddingRight: 0 },
				bodyStyle: { paddingLeft: 0, paddingRight: 0 },
				headerClassName: "text-[14px] px-2 text-center py-2 font-semibold",
				bodyClassName: "text-[14px] px-2 py-2 text-center",
				sortable: true,
			} as React.ComponentProps<typeof Column>;
		});
	}, [data]);

	return {
		columns,
		showTargetModel: showModal,
		setShowTargetModal: setShowModal,
		selectedTargetSentence,
	};
};

export default useTargetTable;
