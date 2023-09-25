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
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import MyNavbar from "./components/Navbar";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
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
				{/* <ReactLenis root> */}
				<NextUIProvider>
					<div className="dark text-foreground bg-background">
						<Outlet />
						<ScrollRestoration />
						<Scripts />
						<LiveReload />
						<Analytics />
					</div>
				</NextUIProvider>
				{/* </ReactLenis> */}
			</body>
		</html>
	);
}
