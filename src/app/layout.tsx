import { Inter } from "next/font/google";
import "./globals.css";
import MainProvider from "@/provider/main";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<MainProvider>
					<div className="flex flex-row overflow-hidden">
						<Sidebar />
						<div className="overflow-y-auto">{children}</div>
					</div>
				</MainProvider>
			</body>
		</html>
	);
}
