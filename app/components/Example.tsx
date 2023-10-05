import { Image } from "@nextui-org/react";
import {
	motion,
	useAnimation,
	useInView,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef, useEffect } from "react";

export const Example = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView]);

	return (
		<div className="pt-[20vh] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 grid-rows-7 gap-2 w-screen  justify-center  p-12">
			<motion.div
				style={{ position: "relative" }}
				variants={{
					hidden: { opacity: 0, y: 200 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 1, delay: 0.5 }}
				ref={ref}
				className="h-[calc(100vh*0.8)]  bg-white col-span-2 row-span-7"
			>
				<Image
					removeWrapper
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src="/iphone152.jpg"
				/>
				<motion.div
					variants={{
						hidden: { left: 0 },
						visible: { left: "100%" },
					}}
					initial="hidden"
					animate={slideControls}
					transition={{ duration: 2, ease: "easeIn" }}
					style={{
						position: "absolute",
						top: 4,
						bottom: 4,
						left: 0,
						right: 0,
						zIndex: 20,
						backgroundColor: "black",
					}}
				></motion.div>
			</motion.div>

			<motion.div
				style={{ position: "relative" }}
				variants={{
					hidden: { opacity: 0, y: 200 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 1, delay: 0.5 }}
				ref={ref}
				className="h-[calc(100vh*0.8)] bg-white col-span-2 row-span-7 col-start-1 md:col-start-3 lg:col-start-3 xl:col-start-3 2xl:col-start-3"
			>
				<Image
					removeWrapper
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src="/iphone15.jpg"
				/>
				<motion.div
					variants={{
						hidden: { right: 0 },
						visible: { right: "100%" },
					}}
					initial="hidden"
					animate={slideControls}
					transition={{ duration: 2, ease: "easeIn" }}
					style={{
						position: "absolute",
						top: 4,
						bottom: 4,
						left: 0,
						right: 0,
						zIndex: 20,
						backgroundColor: "black",
					}}
				></motion.div>
			</motion.div>
		</div>
	);
};
