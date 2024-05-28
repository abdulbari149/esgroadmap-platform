import Table from "./Table";
import TableLayout from "../table-layout";
import { getRoadmapCarbonData } from "@/functions/roadmap-carbon";

const RoadmapCarbon = async () => {
	const roadmapCarbon = await getRoadmapCarbonData();
	return (
		<TableLayout title="Roadmap Carbon Table">
			<Table data={roadmapCarbon} />
		</TableLayout>
	);
};

export default RoadmapCarbon;
