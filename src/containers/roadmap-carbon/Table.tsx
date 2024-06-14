"use client";

import DataTable from "@/components/data-table";
import TargetSentenceModal from "@/components/target-sentence-modal";
import { RoadmapCarbonData } from "@/functions/roadmap-carbon";
import useTargetTable from "@/hooks/use-target-table";
import React from "react";

type Props = {
	data: RoadmapCarbonData[];
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
			<DataTable<RoadmapCarbonData> data={data} columns={columns} />
			<TargetSentenceModal
				setShowTargetModal={setShowTargetModal}
				targetSentence={selectedTargetSentence}
				showTargetModel={showTargetModel}
			/>
		</>
	);
};

export default Table;
