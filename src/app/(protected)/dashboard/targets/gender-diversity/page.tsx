import GenderDiversity from "@/containers/gender-diversity";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gender Diversity",
	description: "Gender Diversity Table",
};

export const dynamic = "force-dynamic";

const Page = () => <GenderDiversity />;

export default Page;
