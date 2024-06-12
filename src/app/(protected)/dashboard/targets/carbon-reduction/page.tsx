import CarbonReduction from "@/containers/carbon-reduction";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Carbon Reduction",
	description: "Carbon Reduction Table",
};

export const dynamic = "force-dynamic";

const Page = () => <CarbonReduction />;

export default Page;
