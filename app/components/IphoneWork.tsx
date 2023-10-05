import { Canvas } from "@react-three/fiber";
import React from "react";
import Iphone from "./Iphone";
import { Center, PresentationControls } from "@react-three/drei";

export default function IphoneWork() {
	return (
		<Canvas shadows camera={{ position: [0, -3.2, 40], fov: 12 }}>
			<directionalLight castShadow position={[7, 10, 5]} intensity={3} />

			{/* Add ambient light for overall illumination */}
			<ambientLight intensity={0.5} />
			<Center>
				<PresentationControls
					snap={true} // Snap-back to center (can also be a spring config)
					speed={5} // Speed factor>
				>
					<Iphone scale={1.5} />

					{/* </ScrollControls> */}
				</PresentationControls>
			</Center>
		</Canvas>
	);
}
