import { getPercentageTableData } from "@/functions/percentages";
import Table from "./Table";
import TableLayout from "../table-layout";

const Percentages = async () => {
	const percentages = await getPercentageTableData();
	return (
		<TableLayout title="Percentage Table">
			<Table data={percentages} />
		</TableLayout>
	);
};

export default Percentages;
