import { useGLTF, useTexture } from "@react-three/drei";
import { React, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Iphone(props) {
	const { nodes, materials } = useGLTF("/untitled.glb");
	const ref = useRef();

	useFrame((_, delta) => {
		ref.current.rotation.y += 0.5 * delta;
	});
	return (
		<group ref={ref} {...props} dispose={null}>
			<group position={[0, 1.563, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Circle038.geometry}
					material={materials["FrameGrey.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Circle038_1.geometry}
					material={materials["Front.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Circle038_2.geometry}
					material={materials["Antennaline.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Circle038_3.geometry}
					material={materials["BackGrey.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Circle038_4.geometry}
					material={materials["Rubber.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AntennaLineBottom001.geometry}
					material={materials["Antennaline.001"]}
					position={[0, -2.676, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AntennaLineTop001.geometry}
					material={materials["Antennaline.001"]}
					position={[0, 0.018, 0]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.AppleLogo001.geometry}
					material={materials["AppleLogo.001"]}
					position={[0.171, 0.521, -0.079]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.BackCameraBottomGreyRing001.geometry}
					material={materials["BackCaneraGrayRIng.002"]}
					position={[0.702, 0.884, -0.094]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.BackCameraBottomLens001.geometry}
					material={materials["Lens.001"]}
					position={[0.702, 0.884, -0.083]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.BackCameraP1001.geometry}
					material={materials["Black.015"]}
					position={[0.705, 1.027, -0.095]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.BackCameraTopGreyRing001.geometry}
					material={materials["BackCaneraGrayRIng.002"]}
					position={[0.702, 1.178, -0.094]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.BackCameraTopLens001.geometry}
					material={materials["Lens.001"]}
					position={[0.702, 1.178, -0.083]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.CameraBump001.geometry}
					material={materials["Frame.001"]}
					position={[0.704, 1.036, -0.079]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.FlashBG001.geometry}
					material={materials["PinkFlash.002"]}
					position={[0.705, 1.027, -0.093]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.FrontCameraContainer001.geometry}
					material={materials["FrontCameraBlack.002"]}
					position={[0.335, 1.323, 0.08]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.FrontSpeakerBG001.geometry}
					material={materials["FrontSpeaker.001"]}
					position={[0.156, 1.321, 0.077]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.iPhoneLogo001.geometry}
					material={materials["iPhoneLogo.001"]}
					position={[0.2, -1.175, -0.079]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.MuteSwitch001.geometry}
					material={materials["FrameGrey.001"]}
					position={[-0.65, 0.92, 0.009]}
				/>
				<group position={[0.97, 0.562, -0.004]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle032.geometry}
						material={materials["FrameGrey.001"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle032_1.geometry}
						material={materials["Frame.001"]}
					/>
				</group>
				<group position={[0.978, -0.043, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle031.geometry}
						material={materials["Black.014"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle031_1.geometry}
						material={materials["FrameGrey.001"]}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.SCREEN.geometry}
					material={materials["Display.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.VolumeButtons001.geometry}
					material={materials["FrameGrey.001"]}
					position={[-0.658, 0.208, -0.002]}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/untitled.glb");
