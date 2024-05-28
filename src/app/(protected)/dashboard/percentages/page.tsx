import Percentages from "@/containers/percentages";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Percentages",
	description: "Percentage Table",
};

export const dynamic = "force-dynamic";

const Page = () => <Percentages />;

export default Page;
