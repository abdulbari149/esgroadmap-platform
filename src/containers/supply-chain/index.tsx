import Table from "./Table";
import TableLayout from "../table-layout";
import { getSentenceSupplierData, getSentenceWasteData } from "@/functions/targets";

const SupplyChain = async () => {
	const data = await getSentenceSupplierData();
	return (
		<TableLayout title="Supply Chain">
			<Table data={data} />
		</TableLayout>
	);
};

export default SupplyChain;
