import RoadmapCarbon from "@/containers/roadmap-carbon";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Roadmap Carbon",
	description: "Roadmap Carbon Table",
};

export const dynamic = "force-dynamic";

const Page = () => <RoadmapCarbon />;

export default Page;
