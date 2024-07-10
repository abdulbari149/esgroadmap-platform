import plans from "@/constants/plans";
import React from "react";

const Subscription: React.FC<{ currentPlan: number }> = ({ currentPlan }) => {
	const plan = plans.find((p) => p.level === currentPlan);

	if (!plan) {
		return <p>Invalid Plan!</p>;
	}

	const levelNextActions = {
		1: "Upgrade",
		2: "Cancel",
		3: "Upgrade",
	};

	return (
		<div className="flex flex-col gap-5 w-[100%]">
			<h2 className="text-[24px] text-[#219E99] font-semibold">
				User Subscription
			</h2>

			<div className="flex flex-col w-[100%] gap-5">
				<p className="text-[15px] text-[#000000] font-normal">
					Your current plan is:{" "}
					<span className="text-[20px] text-[#219E99] font-normal">
						{plan.title}
					</span>
				</p>

				<button
					className="w-fit py-2 px-5 rounded-sm text-[16px] text-white mb-5"
					style={{ background: "rgb(25, 56, 57)" }}
				>
					{plan.level in levelNextActions
						? levelNextActions[plan.level as keyof typeof levelNextActions]
						: ""}
				</button>
			</div>
		</div>
	);
};

export default Subscription;
