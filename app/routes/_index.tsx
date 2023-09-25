import type { MetaFunction } from "@vercel/remix";
import { AppleIcon } from "~/components/AppleIcon";
import { Example } from "~/components/Example";
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
			<MyNavbar className="b" />
			<Section className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-blue-900 to-black grid place-items-center">
				<AppleIcon />
			</Section>

			<Section className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-blue-900 to-black grid place-items-center">
				asd
			</Section>
			<Section className="bg-blue-500 grid place-items-center">
				<Example />
			</Section>
		</>
	);
}
