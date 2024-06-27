import TargetTable from "@/containers/target-table";
import { getSentenceCarbonData } from "@/functions/targets";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Carbon Reduction",
	description: "Carbon Reduction Table",
};

export const dynamic = "force-dynamic";

const Page = async () => {
	const data = await getSentenceCarbonData();

	return <TargetTable title="Carbon Reduction" data={data} />;
};

export default Page;
