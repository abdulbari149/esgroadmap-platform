import Table from "./Table";
import TableLayout from "../table-layout";
import {
	getSentenceSupplierData,
	getSentenceWasteData,
} from "@/functions/targets";

const SupplyChain = async () => {
	const data = await getSentenceSupplierData();
	return (
		<div className="w-full py-10 px-10 overflow-x-hidden">
			<Table data={data} />
		</div>
	)
};

export default SupplyChain;
