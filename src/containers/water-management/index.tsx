import Table from "./Table";
import { getSentenceWaterData } from "@/functions/targets";

const WaterManagement = async () => {
	const data = await getSentenceWaterData();
	return (
		<div className="w-full py-10 px-10 overflow-x-hidden">
			<Table data={data} />
		</div>
	);
};

export default WaterManagement;
