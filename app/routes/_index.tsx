import type { MetaFunction } from "@vercel/remix";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AppleIcon } from "~/components/AppleIcon";
import Cardgang from "~/components/Cardgang";
import { Example } from "~/components/Example";
import Macbook from "~/components/Macbook";
import MyNavbar from "~/components/Navbar";

import Benchmarks from "../components/ProgressBar";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

function Section(props) {
	return (
		<div className={`${props.className} w-screen min-h-screen`}>
			{props.children}
		</div>
	);
}

export default function Index() {
	const ref = useRef(null);

	const isInView = useInView(ref);

	return (
		<>
			<MyNavbar />
			<Section className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-blue-800 to-black grid place-items-center">
				<AppleIcon />
			</Section>
			<Section className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-blue-800 to-black grid place-items-center !h-screen ">
				<section
					className="mt-[20.5vh] text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
					ref={ref}
				>
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
				</section>
				<Macbook />
			</Section>
			<Section className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-blue-800 to-black grid !h-min pt-[45vh]">
				<Benchmarks />
			</Section>

			<Section className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-blue-800 to-black grid min-h-screen pt-[13vh] ">
				<Cardgang />
			</Section>
			<Section className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-blue-800 to-black grid place-items-center !h-min">
				<Example />
			</Section>
		</>
	);
}
