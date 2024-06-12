import Table from "./Table";
import TableLayout from "../table-layout";
import { getSentenceGenderData } from "@/functions/targets";

const GenderDiversity = async () => {
	const data = await getSentenceGenderData();
	return (
		<TableLayout title="Gender Diversity">
			<Table data={data} />
		</TableLayout>
	);
};

export default GenderDiversity;
