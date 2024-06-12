import SupplyChain from "@/containers/supply-chain";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Supply Chain",
	description: "Supply Chain Table",
};

export const dynamic = "force-dynamic";

const Page = () => <SupplyChain />;

export default Page;
