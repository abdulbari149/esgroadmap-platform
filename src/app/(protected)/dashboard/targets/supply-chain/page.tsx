import TargetTable from "@/containers/target-table";
import { getSentenceSupplierData } from "@/functions/targets";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Supply Chain",
	description: "Supply Chain Table",
};

export const dynamic = "force-dynamic";

const Page = async () => {
	const data = await getSentenceSupplierData();
	return <TargetTable title="Supply Chain" data={data} />;
};

export default Page;
