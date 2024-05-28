import { Metadata } from "next";
import CompanyUniverse from "@/containers/company-universe";

export const metadata: Metadata = {
	title: "Company Universe",
	description: "Company Universe Table",
};
export const dynamic = "force-dynamic";

const Page = () => <CompanyUniverse />;

export default Page;
