import React from "react";
import SelectButton from "./select-button";

const levels = [
	{
		id: 1,
		title: <>Free account</>,
		price: <>Free.</>,
		level: 1,
	},
	{
		id: 2,
		title: <>Comprehensive account Analysts&apos; club</>,
		price: (
			<>
				$0.00 <span className="font-normal">now and then</span> $20.00 per
				Month.{" "}
				<span className="font-normal">
					After your initial payment, your first payment is Free.
				</span>
			</>
		),
		level: 2,
	},
	{
		id: 3,
		title: <>Comprehensive account &mdash; University access</>,
		price: <>Free.</>,
		level: 3,
	},
];

const MembershipLevels = () => {
	return (
		<div className="w-100 py-5 grid place-items-center">
			<div className="max-w-[1120px] w-[100%] grid grid-cols-3 grid-rows-4 items-center">
				<p className="font-semibold">Level</p>
				<p className="font-semibold">Price</p>
				<div />

				{levels.map((level) => {
					return (
						<>
							<p className="font-semibold">{level.title}</p>
							<p className="font-semibold">{level.price}</p>
							<SelectButton level={level.level} />
						</>
					);
				})}
			</div>
		</div>
	);
};

export default MembershipLevels;
