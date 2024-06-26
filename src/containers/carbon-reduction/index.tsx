import Table from "./Table";
import TableLayout from "../table-layout";
import { getSentenceCarbonData } from "@/functions/targets";

const CarbonReduction = async () => {
	const data = await getSentenceCarbonData();
	return (
		<div className="w-full py-10 px-10 overflow-x-hidden">
			<Table data={data} />
		</div>
	);
};

export default CarbonReduction;
