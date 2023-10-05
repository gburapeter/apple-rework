import type { MetaFunction } from "@vercel/remix";
import {
	useInView,
	useScroll,
	useTransform,
	motion,
	useSpring,
} from "framer-motion";
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
	const text = useRef(null);

	const { scrollYProgress } = useScroll({
		target: text,
		offset: ["0 1", "1.99 1"],
	});

	// const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
	const scaleProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
		duration: 2000,
	});

	const iphone2 = useRef(null);
	const isInView = useInView(ref);

	const isIphone2 = useInView(iphone2);

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

			<Section className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-blue-800 to-black grid !h-min pt-[13vh] ">
				<Cardgang />
			</Section>
			<Section className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-blue-800 to-black grid place-items-center !h-min ">
				<motion.div
					ref={text}
					style={{
						scale: scaleProgress,
					}}
					transition={{ duration: 10 }}
				>
					<section className=" text-7xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
						<h1>Introducing</h1>
					</section>
				</motion.div>

				<section
					className="mt-[10vh] text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
					ref={iphone2}
				>
					<span
						style={{
							transform: isIphone2 ? "none" : "translateX(-200px)",
							opacity: isIphone2 ? 1 : 0,
							transition:
								"transform 5s ease-in-out, opacity ease-in-out",
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
