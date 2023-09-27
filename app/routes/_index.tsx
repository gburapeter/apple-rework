import type { MetaFunction } from "@vercel/remix";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AppleIcon } from "~/components/AppleIcon";
import Cardgang from "~/components/Cardgang";
import { Example } from "~/components/Example";
import Macbook from "~/components/Macbook";
import MyNavbar from "~/components/Navbar";

import Benchmarks from "../components/ProgressBar";
import IphoneWork from "~/components/IphoneWork";

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

	const iphone = useRef(null);
	const isInView = useInView(ref);
	const isIphone = useInView(iphone);

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
								"transform 2s ease-in-out, opacity 2s ease-in-out",
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
			<Section className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-blue-800 to-black grid place-items-center !h-min ">
				<section
					className="mt-[20.5vh] text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
					ref={iphone}
				>
					<span
						style={{
							transform: isIphone ? "none" : "translateX(-200px)",
							opacity: isIphone ? 1 : 0,
							transition:
								"transform 2s ease-in-out, opacity 2s ease-in-out",
						}}
					>
						Iphone 15
					</span>
				</section>
				<IphoneWork />
			</Section>

			<Section className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-blue-800 to-black grid min-h-screen pt-[13vh] ">
				<Example />
			</Section>
		</>
	);
}
