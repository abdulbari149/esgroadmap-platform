"use client";
import DataTable from "@/components/data-table";
import React from "react";
import useTargetTable from "@/hooks/use-target-table";
import { Dialog } from "primereact/dialog";

type Props<TRow extends object> = {
	title: string;
	data: TRow[];
};

function TargetTable<TRow extends object>({ title, data }: Props<TRow>) {
	const {
		columns,
		selectedTargetSentence: targetSentence,
		setShowTargetModal,
		showTargetModel,
		filters,
	} = useTargetTable(data);
	return (
		<div className="w-full py-10 px-10 overflow-x-hidden">
			<DataTable<TRow>
				title={title}
				data={data}
				columns={columns}
				filters={filters}
			/>
			<Dialog
				header="Target Sentence"
				visible={showTargetModel}
				style={{ width: "50vw" }}
				onHide={() => {
					if (!showTargetModel) return;
					setShowTargetModal(false);
				}}
			>
				<p className="m-0">{targetSentence}</p>
			</Dialog>
		</div>
	);
}

export default TargetTable;
