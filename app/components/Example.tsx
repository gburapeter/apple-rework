import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Example = () => {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

	function useParallax(value: MotionValue<number>, distance: number) {
		return useTransform(value, [0, 1], [-distance, distance]);
	}
	return (
		<div className="grid ">
			<motion.div
				className="bg-white h-40 aspect-square"
				style={{
					scale,
				}}
			>
				<motion.div
					className="item"
					style={{
						scaleY: useParallax(scrollYProgress, 1200),
					}}
				/>
			</motion.div>
		</div>
	);
};
