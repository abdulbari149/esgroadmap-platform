import Renewables from "@/containers/renewables";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Renewables",
	description: "Renewables Table",
};

export const dynamic = "force-dynamic";

const Page = () => <Renewables />;

export default Page;
