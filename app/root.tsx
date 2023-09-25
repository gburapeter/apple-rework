import { cssBundleHref } from "@remix-run/css-bundle";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@vercel/remix";
import stylesheet from "~/tailwind.css";
import { NextUIProvider } from "@nextui-org/react";

import MyNavbar from "./components/Navbar";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				<NextUIProvider>
					<div className="dark text-foreground bg-background">
						<Outlet />
						<ScrollRestoration />
						<Scripts />
						<LiveReload />
						<Analytics />
					</div>
				</NextUIProvider>
			</body>
		</html>
	);
}
