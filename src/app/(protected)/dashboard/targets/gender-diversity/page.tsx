import TargetTable from "@/containers/target-table";
import { getSentenceGenderData } from "@/functions/targets";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gender Diversity",
	description: "Gender Diversity Table",
};

export const dynamic = "force-dynamic";

const Page = async () => {
	const data = await getSentenceGenderData();

	return <TargetTable title="Gender Diversity" data={data} />;
};

export default Page;
