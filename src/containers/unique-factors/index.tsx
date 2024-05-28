import TableLayout from "../table-layout";
import Table from "./Table";
import { getUniqueFactorTableData } from "@/functions/unique-factor";

const UniqueFactors = async () => {
	const uniqueFactors = await getUniqueFactorTableData();
	return (
		<TableLayout title="Unique Factors">
			<Table data={uniqueFactors} />
		</TableLayout>
	);
};

export default UniqueFactors;
