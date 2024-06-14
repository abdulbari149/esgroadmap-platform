"use client";

import DataTable from "@/components/data-table";
import { SentenceGenderData } from "@/functions/targets";
import React from "react";
import useTargetTable from "@/hooks/use-target-table";
import { Dialog } from "primereact/dialog";
import TargetSentenceModal from "@/components/target-sentence-modal";

type Props = {
	data: SentenceGenderData[];
};

const Table = ({ data }: Props) => {
	const {
		columns,
		showTargetModel,
		setShowTargetModal,
		selectedTargetSentence,
	} = useTargetTable(data);

	return (
		<>
			<DataTable<SentenceGenderData> data={data} columns={columns} />
			<TargetSentenceModal
				setShowTargetModal={setShowTargetModal}
				targetSentence={selectedTargetSentence}
				showTargetModel={showTargetModel}
			/>
		</>
	);
};

export default Table;
