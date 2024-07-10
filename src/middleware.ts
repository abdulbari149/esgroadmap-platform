import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import token from "./utils/token";
import publicRoutes from "./constants/routes";
import env from "./config/env.config";
import auth from "./api/auth";

interface CustomNextRequest extends NextRequest {
	user?: {
		id: number;
		email: string;
		username: string;
		role: string;
	};
}

const middleware = async (req: CustomNextRequest) => {
	const { pathname } = req.nextUrl;

	if (pathname === "" || pathname === "/") {
		const url = req.nextUrl.clone();
		url.pathname = "/dashboard";
		return NextResponse.redirect(url);
	}

	const accessToken = cookies().get("token");

	if (pathname.startsWith("/auth")) {
		if (accessToken) {
			const url = req.nextUrl.clone();
			url.pathname = "/dashboard";
			return NextResponse.redirect(url);
		}

		return NextResponse.next();
	}

	if (!accessToken) {
		const url = req.nextUrl.clone();
		url.pathname = "/auth/login";
		return NextResponse.redirect(url);
	}

	try {
		const accessToken = cookies().get("token");
		if (!accessToken) throw new Error("token not found");
		await auth.me(accessToken?.value);
		return NextResponse.next();
	} catch (error) {
		const url = req.nextUrl.clone();
		url.pathname = "/auth/login";
		return NextResponse.redirect(url);
	}
};

export default middleware;

export const config = {
	matcher: ["/dashboard", "/dashboard/:path*", "/", "/auth/:path*"],
};
