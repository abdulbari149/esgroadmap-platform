"use client";

import DataTable from "@/components/data-table";
import { SentenceCarbonData } from "@/functions/targets";
import React from "react";
import useTargetTable from "@/hooks/use-target-table";
import TargetSentenceModal from "@/components/target-sentence-modal";
import { FilterMatchMode } from "primereact/api";

type Props = {
	data: SentenceCarbonData[];
};

const Table = ({ data }: Props) => {

	const {
		columns,
		selectedTargetSentence,
		setShowTargetModal,
		showTargetModel,
		filters
	} = useTargetTable(data);


	return (
		<>
			<DataTable<SentenceCarbonData>
				title="Carbon Reduction"
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
