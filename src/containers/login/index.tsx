import Link from "next/link";

const Login = () => {
	return (
		<div className="w-100 py-5 bg-white grid place-items-center">
			<div className="max-w-[500px] w-[100%] flex flex-col">
				<div className="w-100 space-y-2 mb-5">
					<p className="font-semibold text-[16px] text-[#000000]">
						Username or Email Address
					</p>
					<div className="w-100 flex items-center gap-1">
						<input
							type="text"
							className="w-[90%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
						/>
					</div>
				</div>

				<div className="w-100 space-y-2 mb-5">
					<p className="font-semibold text-[16px] text-[#000000]">Password</p>
					<div className="w-100 flex items-center gap-1">
						<input
							type="text"
							className="w-[90%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
						/>
					</div>
				</div>

				<div className="flex items-center gap-2 mb-5">
					<input type="checkbox" />
					<p className="text-[#000000] text-[16px] font-semibold">
						Remember Me
					</p>
				</div>

				<button
					className="w-fit py-2 px-5 rounded-sm text-[18px] text-white mb-5"
					style={{ background: "rgb(25, 56, 57)" }}
				>
					Login
				</button>

				<div
					className="w-100 h-[2px] mt-4"
					style={{ backgroundColor: "rgb(203, 213, 224)" }}
				/>

				<p className="text-red-700 font-normal py-1 hover:text-[#219E99] focus:text-[#219E99]">
					<Link href="/auth/lost-password" replace>
						Lost Password ?
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
