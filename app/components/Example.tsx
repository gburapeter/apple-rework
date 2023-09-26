import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Example = () => {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

	function useParallax(value: MotionValue<number>, distance: number) {
		return useTransform(value, [0, 1], [-distance, distance]);
	}
	return (
		<div className="pt-[20vh] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 grid-rows-7 gap-2 w-screen h-min justify-center  p-12">
			<div className="h-[calc(100vh*0.8)]  bg-white col-span-2 row-span-7">
				1
			</div>
			{/* <div className="h-[calc(100vh*0.8)] bg-white col-span-2 row-span-7 col-start-1 md:col-start-3 lg:col-start-3 xl:col-start-3 2xl:col-start-3">
				3
				Ani
			</div> */}
		</div>
	);
};
