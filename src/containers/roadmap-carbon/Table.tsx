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
		filters
	} = useTargetTable(data);
	return (
		<>
			<DataTable<RoadmapCarbonData>
				title="Roadmap Carbon"
			data={data} columns={columns} filters={filters} />
			<TargetSentenceModal
				setShowTargetModal={setShowTargetModal}
				targetSentence={selectedTargetSentence}
				showTargetModel={showTargetModel}
			/>
		</>
	);
};

export default Table;
