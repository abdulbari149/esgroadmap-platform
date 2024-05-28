import UniqueFactors from "@/containers/unique-factors";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Unique Factors",
	description: "Unique Factors Table",
};

export const dynamic = "force-dynamic";

const Page = () => <UniqueFactors />;

export default Page;
