"use client";

import DataTable from "@/components/data-table";
import { SentenceCarbonData } from "@/functions/targets";
import React from "react";
import useTargetTable from "@/hooks/use-target-table";
import TargetSentenceModal from "@/components/target-sentence-modal";

type Props = {
	data: SentenceCarbonData[];
};

const Table = ({ data }: Props) => {
	const {
		columns,
		selectedTargetSentence,
		setShowTargetModal,
		showTargetModel,
	} = useTargetTable(data);

	return (
		<>
			<DataTable<SentenceCarbonData> data={data} columns={columns} />
			<TargetSentenceModal
				setShowTargetModal={setShowTargetModal}
				targetSentence={selectedTargetSentence}
				showTargetModel={showTargetModel}
			/>
		</>
	);
};

export default Table;
