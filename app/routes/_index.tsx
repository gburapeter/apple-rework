import { ReactLenis } from "@studio-freight/react-lenis";
import type { MetaFunction } from "@vercel/remix";
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
			{/* <ReactLenis root> */}
			<MyNavbar />
			<Section className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-blue-900 to-black grid place-items-center">
				<AppleIcon />
			</Section>
			{/* </ReactLenis> */}
			<Section className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-blue-900 to-black grid place-items-center ">
				{/* <section ref={ref}>
					<span
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition:
								"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					>
						Macbook Pro
					</span>
				</section> */}
				<Macbook />
			</Section>
			<Section className="bg-blue-500 grid place-items-center">
				<Example />
			</Section>
		</>
	);
}
