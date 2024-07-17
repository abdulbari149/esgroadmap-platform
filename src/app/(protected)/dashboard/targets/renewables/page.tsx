import Target from "@/containers/target";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Renewables",
	description: "Renewables Table",
};

const Page = () => {
	return <Target title="Renewables" tableName="renewables" />;
};

export default Page;
