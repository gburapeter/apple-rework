import {
	GlobalCanvas,
	ScrollScene,
	SmoothScrollbar,
	UseCanvas,
} from "@14islands/r3f-scroll-rig";
import Lenis from "@studio-freight/lenis";
import type { MetaFunction } from "@vercel/remix";
import { useEffect } from "react";
import { AppleIcon } from "~/components/AppleIcon";
import { Example } from "~/components/Example";
import Macbook from "~/components/Macbook";
import MyNavbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

function Section(props) {
	return (
		<div className={`${props.className} w-screen h-screen overflow-y-auto`}>
			{props.children}
		</div>
	);
}

export default function Index() {
	return (
		<>
			{/* <GlobalCanvas /> */}
			{/* <SmoothScrollbar /> */}

			<MyNavbar />
			<Section className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-blue-900 to-black grid place-items-center">
				<AppleIcon />
			</Section>

			<Section className=" bg-green-500 ">
				<Macbook />
			</Section>
			<Section className="bg-blue-500 grid place-items-center">
				<Example />
			</Section>
		</>
	);
}
