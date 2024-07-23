import { currentUser } from "@/functions/user";
import { UserIcon } from "lucide-react";

const Page = async () => {
	const { user } = await currentUser();

	const hasComprehensiveAccount = user.plan === 2;

	return (
		<div>
			<header className="flex w-[100%] items-center pt-[30px]">
				<p className="text-center self-center flex-[0.9] text-[32px]">
					Welcome to{" "}
					<span className="text-[#219e98] font-semibold">
						Esgroadmap User Portal
					</span>
				</p>
				<div className="flex-[0.1] flex gap-2 items-center">
					<UserIcon />
					<p className="text-center align-bottom text-[17px]">
						{user.username}
					</p>
				</div>
			</header>
		</div>
	);
};

export default Page;
