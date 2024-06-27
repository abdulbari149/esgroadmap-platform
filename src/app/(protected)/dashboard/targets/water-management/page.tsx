import TargetTable from "@/containers/target-table";
import { getSentenceWaterData } from "@/functions/targets";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Water Management",
	description: "Water Management Table",
};

export const dynamic = "force-dynamic";

const Page = async () => {
	const data = await getSentenceWaterData();
	return <TargetTable title="Water Management" data={data} />;
};

export default Page;
