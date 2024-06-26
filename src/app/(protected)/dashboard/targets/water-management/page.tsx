import WaterManagement from "@/containers/water-management";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Water Management",
	description: "Water Management Table",
};

export const dynamic = "force-dynamic";

const Page = () => <WaterManagement />;

export default Page;
