import Target from "@/containers/target";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Water Management",
	description: "Water Management Table",
};

const Page = () => {
	return <Target title="Water Management" tableName="water_management" />;
};

export default Page;
