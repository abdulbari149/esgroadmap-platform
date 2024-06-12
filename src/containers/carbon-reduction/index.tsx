import Table from "./Table";
import TableLayout from "../table-layout";
import { getSentenceCarbonData } from "@/functions/targets";

const CarbonReduction = async () => {
	const data = await getSentenceCarbonData();
	return (
		<TableLayout title="Carbon Reduction">
			<Table data={data} />
		</TableLayout>
	);
};

export default CarbonReduction;
