import TargetTable from "@/containers/target-table";
import { getSentenceRenewablesData } from "@/functions/targets";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Renewables",
	description: "Renewables Table",
};

export const dynamic = "force-dynamic";

const Page = async () => {
	const data = await getSentenceRenewablesData();

	return <TargetTable title="Renewables" data={data} />;
};

export default Page;
