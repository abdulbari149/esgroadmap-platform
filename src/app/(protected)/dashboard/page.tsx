import { currentUser } from "@/functions/user";

const Page = async () => {
	const { user } = await currentUser();

	const hasComprehensiveAccount = user.plan === 2;

	return (
		<div>
			<p className="text-center pt-[50px] text-[40px]">
				Welcome to{" "}
				<span className="text-[#219e98] font-semibold">
					Esgroadmap User Portal
				</span>
			</p>
		</div>
	);
};

export default Page;
