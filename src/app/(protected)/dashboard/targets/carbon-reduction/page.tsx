import { Metadata } from "next";
import Target from "@/containers/target";

export const metadata: Metadata = {
	title: "Carbon Reduction",
	description: "Carbon Reduction Table",
};

const Page = async () => {
	return <Target title="Carbon Reduction" tableName="carbon_reduction" />;
};

export default Page;
