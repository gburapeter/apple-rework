import {
	motion,
	useAnimation,
	useInView,
	useScroll,
	useTransform,
} from "framer-motion";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Button,
} from "@nextui-org/react";
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
				<Card isFooterBlurred className=" w-full h-full ">
					<Image
						removeWrapper
						alt="Relaxing app background"
						className="z-0 w-full h-full object-cover"
						src="/iphone15.jpg"
					/>
					<CardFooter className="absolute bg-black/40 top-0 z-10 border-t-1 border-default-600 dark:border-default-100">
						<div className="flex flex-grow gap-2 items-center">
							<div className="flex flex-col">
								<p className="text-md font-bold text-white">
									Iphone 15
								</p>
							</div>
						</div>
						<Button radius="full" size="sm">
							Take me there
						</Button>
					</CardFooter>
				</Card>
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
				<Card isFooterBlurred className=" w-full h-full ">
					<Image
						removeWrapper
						alt="Relaxing app background"
						className="z-0 w-full h-full object-cover"
						src="/iphone152.jpg"
					/>
					<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
						<div className="flex flex-grow gap-2 items-center">
							<div className="flex flex-col">
								<p className="text-md font-bold text-white">
									New Camera options
								</p>
							</div>
						</div>
						<Button radius="full" size="sm">
							Read more
						</Button>
					</CardFooter>
				</Card>
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
