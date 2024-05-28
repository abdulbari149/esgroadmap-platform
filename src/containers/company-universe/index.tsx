import Table from "./Table";
import TableLayout from "../table-layout";
import { getCompanyUniverseTableData } from "@/functions/company-universe";

const CompanyUniverse = async () => {
	const companyUniverse = await getCompanyUniverseTableData();
	return (
		<TableLayout title="Company Universe Table">
			<Table data={companyUniverse} />
		</TableLayout>
	);
};

export default CompanyUniverse;
