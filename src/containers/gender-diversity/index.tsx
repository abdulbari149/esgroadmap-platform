import Table from "./Table";
import TableLayout from "../table-layout";
import { getSentenceGenderData } from "@/functions/targets";

const GenderDiversity = async () => {
	const data = await getSentenceGenderData();
	return (
		<div className="w-full py-10 px-10 overflow-x-hidden">
			<Table data={data} />
		</div>
	)
};

export default GenderDiversity;
