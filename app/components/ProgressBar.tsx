import { useRef, useEffect } from "react";
import { Progress } from "@nextui-org/react";
import { useAnimation, useInView, motion } from "framer-motion";

export default function Benchmarks() {
	const file = useRef(null);
	const clang = useRef(null);
	const ray = useRef(null);

	// view
	const isFile = useInView(file);
	const isClang = useInView(clang);
	const isRay = useInView(ray);

	// controls
	const mainControls = useAnimation();

	const clangControls = useAnimation();

	const rayControls = useAnimation();

	useEffect(() => {
		if (isFile) {
			mainControls.start("visible");
		}
	}, [isFile]);

	useEffect(() => {
		if (isClang) {
			clangControls.start("visible");
		}
	}, [isClang]);

	useEffect(() => {
		if (isRay) {
			rayControls.start("visible");
		}
	}, [isRay]);
	return (
		<>
			<div className="grid grid-cols-7 grid-rows-6 gap-y-32 space-y-4">
				<div className="col-span-3 row-span-2 col-start-2">
					<h1 className="pb-[5vh] text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
						File compression
					</h1>
					<motion.div
						variants={{
							hidden: { width: "0%" },
							visible: { width: "100%" },
						}}
						initial="hidden"
						animate={mainControls}
						transition={{ duration: 2, delay: 0.5 }}
						ref={file}
						className="mt-[5.5vh] text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
					>
						<Progress
							size="md"
							radius="md"
							classNames={{
								base: "w-[40vw]",
								track: "drop-shadow-md border border-default",
								indicator:
									"bg-gradient-to-r from-pink-500 to-yellow-500",
								label: "tracking-wider font-medium text-default-600",
								value: "text-foreground/60",
							}}
							label="M2"
							value={100}
						/>
					</motion.div>
					<Progress
						size="md"
						radius="md"
						classNames={{
							base: "!w-[32vw]",
							track: "drop-shadow-md border border-default",
							indicator: "bg-white",
							label: "tracking-wider font-medium text-default-600",
							value: "text-foreground/60",
						}}
						label="M1"
						value={100}
						style={{ width: "80%" }}
					/>
				</div>
				<motion.div
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1 },
					}}
					initial="hidden"
					animate={mainControls}
					transition={{ duration: 2, delay: 2.5 }}
					className=" pl-[2vw] text-orange-500 font-bold row-span-2 col-start-5  self-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
				>
					1.2x
				</motion.div>
				<div className="col-span-3 row-span-2 col-start-2 md:col-start-4 lg:col-start-4 xl:col-start-4 2xl:col-start-4 row-start-3">
					<h1 className="pb-[5vh] text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
						Clang compilation
					</h1>
					<motion.div
						variants={{
							hidden: { width: "0%" },
							visible: { width: "100%" },
						}}
						initial="hidden"
						animate={clangControls}
						transition={{ duration: 2, delay: 0.5 }}
						ref={clang}
						className="mt-[5.5vh] text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
					>
						<Progress
							size="md"
							radius="md"
							classNames={{
								base: "w-[38vw]",
								track: "drop-shadow-md border border-default",
								indicator:
									"bg-gradient-to-r from-pink-500 to-yellow-500",
								label: "tracking-wider font-medium text-default-600",
								value: "text-foreground/60",
							}}
							label="M2 "
							value={100}
						/>
					</motion.div>
					<Progress
						size="md"
						radius="md"
						classNames={{
							base: "!w-[32vw]",
							track: "drop-shadow-md border border-default",
							indicator: "bg-white",
							label: "tracking-wider font-medium text-default-600",
							value: "text-foreground/60",
						}}
						label="M1 "
						value={100}
					/>
				</div>

				<motion.div
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1 },
					}}
					initial="hidden"
					animate={clangControls}
					transition={{ duration: 2, delay: 2.5 }}
					className=" pl-[2vw] row-span-2 col-start-5 md:col-start-7 lg:col-start-7 xl:col-start-7 2xl:col-start-7 row-start-3 self-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-orange-500"
				>
					1.18x
				</motion.div>
				<div className="col-span-3 row-span-2 col-start-2 row-start-5">
					<h1 className="pb-[5vh] text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
						Ray tracing
					</h1>
					<motion.div
						variants={{
							hidden: { width: "0%" },
							visible: { width: "100%" },
						}}
						initial="hidden"
						animate={rayControls}
						transition={{ duration: 2, delay: 0.5 }}
						ref={ray}
						className="mt-[5.5vh]  text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
					>
						<Progress
							size="md"
							radius="md"
							classNames={{
								base: "w-[43vw]",
								track: "drop-shadow-md border border-default",
								indicator:
									"bg-gradient-to-r from-pink-500 to-yellow-500",
								label: "tracking-wider font-medium text-default-600",
								value: "text-foreground/60",
							}}
							label="M2 "
							value={100}
						/>
					</motion.div>
					<Progress
						size="md"
						radius="md"
						classNames={{
							base: "!w-[30vw]",
							track: "drop-shadow-md border border-default",
							indicator: "bg-white",
							label: "tracking-wider font-medium text-default-600",
							value: "text-foreground/60",
						}}
						label="M1 "
						style={{ width: "80%" }}
						value={100}
					/>
				</div>
				<motion.div
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1 },
					}}
					initial="hidden"
					animate={rayControls}
					transition={{ duration: 2, delay: 2.5 }}
					className="pl-[2vw] row-span-2 col-start-5 row-start-5 self-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-orange-500"
				>
					1.25x
				</motion.div>
			</div>

			<div className="grid grid-rows-2 place-items-center pt-[35vh] ">
				<div className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
					Wanna explore further?
				</div>
				<div className="text-2xl pt-[2vh]">Read some of our articles</div>
			</div>
		</>
	);
}
