"use client";

import DataTable from "@/components/data-table";
import { SentenceSupplierData } from "@/functions/targets";
import React from "react";
import useTargetTable from "@/hooks/use-target-table";
import TargetSentenceModal from "@/components/target-sentence-modal";

type Props = {
	data: SentenceSupplierData[];
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
			<DataTable<SentenceSupplierData>
				data={data}
				columns={columns}
				filters={filters}
				title=''
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
