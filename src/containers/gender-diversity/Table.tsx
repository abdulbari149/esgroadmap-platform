"use client";

import DataTable from "@/components/data-table";
import { SentenceGenderData } from "@/functions/targets";
import React from "react";
import useTargetTable from "@/hooks/use-target-table";
import { Dialog } from "primereact/dialog";
import TargetSentenceModal from "@/components/target-sentence-modal";
import { FilterMatchMode } from "primereact/api";

type Props = {
	data: SentenceGenderData[];
};

const Table = ({ data }: Props) => {
	const {
		columns,
		showTargetModel,
		setShowTargetModal,
		selectedTargetSentence,
		filters
	} = useTargetTable(data);

	return (
		<>
			<DataTable<SentenceGenderData>
				title="Gender Diversity"
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
