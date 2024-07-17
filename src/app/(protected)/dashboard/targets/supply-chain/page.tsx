import Target from "@/containers/target";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Supply Chain",
	description: "Supply Chain Table",
};

const Page = () => {
	return <Target title="Supply Chain" tableName="supply_chain" />;
};

export default Page;
