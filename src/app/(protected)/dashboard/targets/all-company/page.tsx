import TargetTable from "@/containers/target-table";
import { getSentenceAllCompanyData } from "@/functions/targets";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "All Company",
	description: "All Company Table",
};

const Page = async () => {
	const data = await getSentenceAllCompanyData();
	return <TargetTable title="All Company" data={data} />;
};

export default Page;
