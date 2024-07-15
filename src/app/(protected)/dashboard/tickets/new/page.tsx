import CreateNewTicket from "@/containers/tickets/new";
import { currentUser } from "@/functions/user";
import React from "react";

const Page = async () => {
	const { user } = await currentUser();
	return <CreateNewTicket user={user} />;
};

export default Page;
