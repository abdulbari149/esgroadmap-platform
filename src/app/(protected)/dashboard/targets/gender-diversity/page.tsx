import { Metadata } from "next";
import Target from "@/containers/target";

export const metadata: Metadata = {
	title: "Gender Diversity",
	description: "Gender Diversity Table",
};

const Page = async () => {
	return <Target title="Gender Diversity" tableName="gender_diversity" />;
};

export default Page;
