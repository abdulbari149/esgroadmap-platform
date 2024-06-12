import WasteAndRecycling from "@/containers/waste-&-recycling";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Water Management",
	description: "Water Management Table",
};

export const dynamic = "force-dynamic";

const Page = () => <WasteAndRecycling />;

export default Page;
