import SentenceAll from "@/containers/sentence-all";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Sentence All",
	description: "Sentence All Table",
};

export const dynamic = "force-dynamic";

const Page = () => <SentenceAll />;

export default Page;
