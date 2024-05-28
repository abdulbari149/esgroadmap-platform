import TargetSentence from "@/containers/target-sentence";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Target Sentences",
	description: "Target Sentences Table",
};

export const dynamic = "force-dynamic";

const Page = () => <TargetSentence />;

export default Page;
