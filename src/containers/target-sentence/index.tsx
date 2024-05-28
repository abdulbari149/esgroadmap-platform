import TableLayout from "../table-layout";
import { getTargetSentenceData } from "@/functions/target-sentence";
import dynamic from "next/dynamic";

const Table = dynamic(() => import("./Table"));

const TargetSentence = async () => {
	const targetSentence = await getTargetSentenceData();
	return (
		<TableLayout title="Target Sentence Table">
			<Table data={targetSentence} />
		</TableLayout>
	);
};

export default TargetSentence;
