import WasteAndRecycling from "@/containers/waste-&-recycling";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Waste & Recycling",
	description: "Waste & Recycling Table",
};

export const dynamic = "force-dynamic";

const Page = () => <WasteAndRecycling />;

export default Page;
