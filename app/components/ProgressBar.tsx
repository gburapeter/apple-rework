import React from "react";

import { Progress } from "@nextui-org/react";

export default function Benchmarks() {
	return (
		<>
			<div className="grid grid-cols-7 grid-rows-6 gap-y-32 ">
				<div className="col-span-3 row-span-2 col-start-2">
					<h1 className="pb-[5vh] text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
						File compression
					</h1>
					<Progress
						size="md"
						radius="md"
						classNames={{
							base: "w-[40vw]",
							track: "drop-shadow-md border border-default",
							indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
							label: "tracking-wider font-medium text-default-600",
							value: "text-foreground/60",
						}}
						label="M2 model"
						value={100}
					/>
					<Progress
						size="md"
						radius="md"
						classNames={{
							base: "w-[31vw]",
							track: "drop-shadow-md border border-default",
							indicator: "bg-white",
							label: "tracking-wider font-medium text-default-600",
							value: "text-foreground/60",
						}}
						label="M1 model"
						value={100}
					/>
				</div>
				<div className="pl-[2vw] text-orange-500 font-bold row-span-2 col-start-5 self-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
					1.2x
				</div>
				<div className="col-span-3 row-span-2 col-start-2 md:col-start-4 lg:col-start-4 xl:col-start-4 2xl:col-start-4 row-start-3">
					<h1 className="pb-[5vh] text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
						Clang compilation
					</h1>
					<Progress
						size="md"
						radius="md"
						classNames={{
							base: "w-[38vw]",
							track: "drop-shadow-md border border-default",
							indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
							label: "tracking-wider font-medium text-default-600",
							value: "text-foreground/60",
						}}
						label="M2 model"
						value={100}
					/>
					<Progress
						size="md"
						radius="md"
						classNames={{
							base: "w-[31vw]",
							track: "drop-shadow-md border border-default",
							indicator: "bg-white",
							label: "tracking-wider font-medium text-default-600",
							value: "text-foreground/60",
						}}
						label="M1 model"
						value={100}
					/>
				</div>
				<div className="pl-[2vw] row-span-2 col-start-5 md:col-start-7 lg:col-start-7 xl:col-start-7 2xl:col-start-7 row-start-3 self-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-orange-500">
					1.18x
				</div>
				<div className="col-span-3 row-span-2 col-start-2 row-start-5">
					<h1 className="pb-[5vh] text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
						Ray tracing
					</h1>
					<Progress
						size="md"
						radius="md"
						classNames={{
							base: "w-[43vw]",
							track: "drop-shadow-md border border-default",
							indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
							label: "tracking-wider font-medium text-default-600",
							value: "text-foreground/60",
						}}
						label="M2 model"
						value={100}
					/>
					<Progress
						size="md"
						radius="md"
						classNames={{
							base: "w-[31.5vw]",
							track: "drop-shadow-md border border-default",
							indicator: "bg-white",
							label: "tracking-wider font-medium text-default-600",
							value: "text-foreground/60",
						}}
						label="M1 model"
						value={100}
					/>
				</div>
				<div className="pl-[2vw] row-span-2 col-start-5 row-start-5 self-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-orange-500">
					1.25x
				</div>
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
