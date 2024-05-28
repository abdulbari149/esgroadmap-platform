import Table from "./Table";
import TableLayout from "../table-layout";
import { getSentenceAllData } from "@/functions/sentence-all";

const SentenceAll = async () => {
	const sentenceAll = await getSentenceAllData();
	return (
		<TableLayout title="Sentence All Table">
			<Table data={sentenceAll} />
		</TableLayout>
	);
};

export default SentenceAll;
