import Table from "./Table";
import TableLayout from "../table-layout";
import { getSentenceWasteData } from "@/functions/targets";

const WasteAndRecycling = async () => {
	const data = await getSentenceWasteData();
	return (
		<div className="w-full py-10 px-10 overflow-x-hidden">
			<Table data={data} />
		</div>
	)
};

export default WasteAndRecycling;
