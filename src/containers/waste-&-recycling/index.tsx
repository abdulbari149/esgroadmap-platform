import Table from "./Table";
import TableLayout from "../table-layout";
import { getSentenceWasteData } from "@/functions/targets";

const WasteAndRecycling = async () => {
	const data = await getSentenceWasteData();
	return (
		<TableLayout title="Waste & Recycling">
			<Table data={data} />
		</TableLayout>
	);
};

export default WasteAndRecycling;
