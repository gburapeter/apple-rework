import React from "react";

import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";
export default function Cardgang() {
	return (
		<div className="cursor-pointer max-w-screen gap-2 2xl:gap-4 grid grid-cols-12 grid-rows-3 p-12 max-w-7xl">
			<Card className="border-4 border-transparent hover:border-slate-100 transition ease-in-out delay-150 col-span-12 sm:col-span-4 h-[300px]">
				<CardHeader className="absolute z-10 top-1 flex-col !items-start">
					<p className="text-tiny text-white uppercase font-bold">
						M2 Chip
					</p>
					<h4 className="text-white font-medium text-large">
						Revolutionizing the industry
					</h4>
				</CardHeader>
				<Image
					removeWrapper
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src="/mac1.jpg"
				/>
			</Card>
			<Card className="border-4 border-transparent hover:border-slate-100 transition ease-in-out delay-150 col-span-12 sm:col-span-4 h-[300px]">
				<CardHeader className="absolute z-10 top-1 flex-col !items-start">
					<p className="text-tiny text-white uppercase font-bold">Adobe</p>
					<h4 className="text-white font-medium text-large">
						Edit like a pro
					</h4>
				</CardHeader>
				<Image
					removeWrapper
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src="/mac4.jpg"
				/>
			</Card>
			<Card className="border-4 border-transparent hover:border-slate-100 transition ease-in-out delay-150 col-span-12 sm:col-span-4 h-[300px]">
				<CardHeader className="absolute z-10 top-1 flex-col !items-start">
					<p className="text-tiny text-white uppercase font-bold">
						Retina
					</p>
					<h4 className="text-white font-medium text-large">
						Supercharged visuals
					</h4>
				</CardHeader>
				<Image
					removeWrapper
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src="/mac5.jpg"
				/>
			</Card>
			<Card
				isFooterBlurred
				className="2xl:h-[350px] xl:h-[350px] border-4 border-transparent hover:border-slate-100 transition ease-in-out delay-150 w-full h-[300px] col-span-12 sm:col-span-5"
			>
				<CardHeader className="absolute z-10 top-1 flex-col items-start">
					<p className="text-tiny text-white uppercase font-bold">New</p>
					<h4 className="text-slate-100 font-bold text-2xl">
						Apple Watch Nike
					</h4>
				</CardHeader>
				<Image
					removeWrapper
					alt="Card example background"
					className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
					src="/mac3.jpg"
				/>
				<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
					<div>
						<p className="text-gray-800 font-bold text-sm">
							Available worldwide
						</p>
					</div>
					<Button
						className="text-tiny"
						color="primary"
						radius="full"
						size="sm"
					>
						Shop
					</Button>
				</CardFooter>
			</Card>
			<Card
				isFooterBlurred
				className="2xl:h-[350px] xl:h-[350px] border-4 border-transparent hover:border-slate-100 transition ease-in-out delay-150 w-full h-[300px] col-span-12 sm:col-span-7"
			>
				<Image
					removeWrapper
					alt="Relaxing app background"
					className="z-0 w-full h-full object-cover"
					src="/mac2.jpg"
				/>
				<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
					<div className="flex flex-grow gap-2 items-center">
						<div className="flex flex-col">
							<p className="text-sm font-bold text-white">
								What are you waiting for?
							</p>
							<p className="text-sm font-bold text-white">Buy it now</p>
						</div>
					</div>
					<Button radius="full" size="sm">
						Shop
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
