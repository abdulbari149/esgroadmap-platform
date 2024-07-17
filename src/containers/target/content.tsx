import TargetTable from "@/containers/target/table";
import targets, { TargetTables } from "@/functions/targets";

const Content: React.FC<{ tableName: TargetTables }> = async ({
	tableName,
}) => {
	const data = await targets[tableName]();
	return <TargetTable tableName={tableName} data={data} />;
};

export default Content;
