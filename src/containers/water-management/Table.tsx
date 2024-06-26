"use client";

import DataTable from "@/components/data-table";
import { SentenceWaterData } from "@/functions/targets";
import React from "react";
import useTargetTable from "@/hooks/use-target-table";
import TargetSentenceModal from "@/components/target-sentence-modal";

type Props = {
	data: SentenceWaterData[];
};

const Table = ({ data }: Props) => {
	const {
		columns,
		selectedTargetSentence,
		setShowTargetModal,
		showTargetModel,
		filters,
	} = useTargetTable(data);

	return (
		<>
			<DataTable<SentenceWaterData>
				title="Water Management"
				data={data}
				columns={columns}
				filters={filters}
			/>
			<TargetSentenceModal
				setShowTargetModal={setShowTargetModal}
				targetSentence={selectedTargetSentence}
				showTargetModel={showTargetModel}
			/>
		</>
	);
};

export default Table;
