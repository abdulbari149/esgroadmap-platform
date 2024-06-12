import Table from "./Table";
import TableLayout from "../table-layout";
import { getSentenceWaterData } from "@/functions/targets";

const WaterManagement = async () => {
	const data = await getSentenceWaterData();
	return (
		<TableLayout title="Water Management">
			<Table data={data} />
		</TableLayout>
	);
};

export default WaterManagement;
