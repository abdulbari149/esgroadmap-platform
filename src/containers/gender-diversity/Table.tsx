"use client";

import DataTable from "@/components/data-table";
import { SentenceCarbonData, SentenceGenderData } from "@/functions/targets";
import calculateWidthBasedOnWordLength from "@/utils/calculate-width";
import { Column } from "primereact/column";
import React, { useMemo } from "react";
import dbColumns from "@/constants/columns";

type Props = {
	data: SentenceGenderData[];
};

const Table = ({ data }: Props) => {
	const columns = useMemo(() => {
		if (data.length === 0) return [];

		return Object.keys(data[0])
			.sort((a, b) => a.localeCompare(b))
			.map((key) => {
				const hasEnoughSpaces = key.split(" ").length > 4;

				const width = `${
					calculateWidthBasedOnWordLength(key, hasEnoughSpaces ? 2 : 1) + 20
				}px`;

				let limit = 10000;

				if (key === dbColumns.TargetSentenceView.Target_sentence) {
					limit = 45;
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
					bodyClassName: "text-[14px] px-2 py-2 text-center cursor-pointer",
					sortable: true,
				} as React.ComponentProps<typeof Column>;
			});
	}, [data]);

	return <DataTable<SentenceGenderData> data={data} columns={columns} />;
};

export default Table;
