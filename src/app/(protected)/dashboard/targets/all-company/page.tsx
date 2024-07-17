import { Metadata } from "next";
import Target from "@/containers/target";

export const metadata: Metadata = {
	title: "All Company",
	description: "All Company Table",
};

const Page = async () => {
	return <Target title="All Company" tableName="all_company" />;
};

export default Page;
