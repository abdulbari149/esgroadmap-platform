import TargetTable from "@/containers/target-table";
import { getSentenceWasteData } from "@/functions/targets";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Waste & Recycling",
	description: "Waste & Recycling Table",
};

export const dynamic = "force-dynamic";

const Page = async () => {
	const data = await getSentenceWasteData();
	return <TargetTable title="Waste & Recycling" data={data} />;
};

export default Page;
