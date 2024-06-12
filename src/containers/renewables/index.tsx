import Table from "./Table";
import TableLayout from "../table-layout";
import { getSentenceRenewablesData } from "@/functions/targets";

const Renewables = async () => {
	const data = await getSentenceRenewablesData();
	return (
		<TableLayout title="Renewables">
			<Table data={data} />
		</TableLayout>
	);
};

export default Renewables;
