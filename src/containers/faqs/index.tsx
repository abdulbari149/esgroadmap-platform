import React from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		id: 1,
		title: "How do I reset my password?",
		description:
			"To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions to reset your password.",
	},
	{
		id: 2,
		title: "Where can I find my order history?",
		description:
			"You can find your order history by logging into your account and navigating to the 'Order History' section under 'My Account'.",
	},
	{
		id: 3,
		title: "How do I contact customer support?",
		description:
			"You can contact customer support by clicking on the 'Contact Us' link at the bottom of our website or by calling our support hotline at 1-800-123-4567.",
	},
	{
		id: 4,
		title: "What is the return policy?",
		description:
			"Our return policy allows for returns within 30 days of purchase. Items must be in their original condition and packaging. Please visit our 'Return Policy' page for more details.",
	},
	{
		id: 5,
		title: "How can I track my order?",
		description:
			"To track your order, log into your account and go to 'My Orders'. Click on the order you want to track and you will find the tracking information there.",
	},
	{
		id: 6,
		title: "What payment methods are accepted?",
		description:
			"We accept various payment methods including credit/debit cards, PayPal, and Apple Pay. Please check our 'Payment Methods' page for a full list of accepted payment options.",
	},
	{
		id: 7,
		title: "How do I update my billing information?",
		description:
			"To update your billing information, log into your account and go to 'Billing Information' under 'My Account'. Make the necessary changes and save them.",
	},
	{
		id: 8,
		title: "Can I change or cancel my order?",
		description:
			"You can change or cancel your order within 24 hours of placing it. Please contact our customer support team for assistance.",
	},
	{
		id: 9,
		title: "How do I apply a discount code?",
		description:
			"To apply a discount code, enter the code at checkout in the 'Discount Code' field and click 'Apply'. The discount will be reflected in your total.",
	},
	{
		id: 10,
		title: "What are the shipping options?",
		description:
			"We offer various shipping options including standard, expedited, and overnight shipping. Please visit our 'Shipping Information' page for more details on shipping times and costs.",
	},
];

const Faqs = () => {
	return (
		<div className="px-10 pt-[5vh] w-[100%] overflow-x-hidden">
			<h1 className="text-[32px] text-[#219E99] font-bold">
				Frequently Asked Questions
			</h1>
			<div className="flex flex-row gap-10 pt-10 w-[100%]">
				<Accordion type="multiple" className="flex-1 space-y-3">
					{faqs.slice(0, faqs.length / 2).map((faq) => {
						return (
							<AccordionItem value={faq.id.toString()} key={faq.id}>
								<AccordionTrigger>{faq.title}</AccordionTrigger>
								<AccordionContent>{faq.description} </AccordionContent>
							</AccordionItem>
						);
					})}
				</Accordion>
				<Accordion type="multiple" className="flex-1 space-y-3">
					{faqs.slice(faqs.length / 2).map((faq) => {
						return (
							<AccordionItem value={faq.id.toString()} key={faq.id}>
								<AccordionTrigger>{faq.title}</AccordionTrigger>
								<AccordionContent>{faq.description} </AccordionContent>
							</AccordionItem>
						);
					})}
				</Accordion>
			</div>
		</div>
	);
};

export default Faqs;
