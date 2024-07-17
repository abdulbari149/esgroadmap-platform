import Target from "@/containers/target";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Waste & Recycling",
	description: "Waste & Recycling Table",
};

const Page = () => {
	return <Target title="Waste & Recycling" tableName="waste_&_recycling" />;
};

export default Page;
