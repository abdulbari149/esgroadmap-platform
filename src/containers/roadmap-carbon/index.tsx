import Table from "./Table";
import TableLayout from "../table-layout";
import { getRoadmapCarbonData } from "@/functions/roadmap-carbon";

const RoadmapCarbon = async () => {
	const data = await getRoadmapCarbonData();
	return (
		<div className="w-full py-10 px-10 overflow-x-hidden">
			<Table data={data} />
		</div>
	);
};

export default RoadmapCarbon;
