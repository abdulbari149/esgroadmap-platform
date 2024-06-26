import Table from "./Table";
import TableLayout from "../table-layout";
import { getSentenceRenewablesData } from "@/functions/targets";

const Renewables = async () => {
	const data = await getSentenceRenewablesData();
	return (
		<div className="w-full py-10 px-10 overflow-x-hidden">
			<Table data={data} />
		</div>
	)
};

export default Renewables;
