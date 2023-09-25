import React from "react";

import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function App() {
	return (
		<Card isFooterBlurred radius="lg" className="w-80 h-80 border-none">
			<Image
				alt="Woman listing to music"
				className="w-80 h-80 object-fill"
				src="https://mediamodifier.com/blog/wp-content/uploads/2020/02/02_3D_macbook_and_iphone_mockup_template.jpg"
			/>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<p className="text-tiny text-white/80">Available soon.</p>
				<Button
					className="text-tiny text-white bg-black/20"
					variant="flat"
					color="default"
					radius="lg"
					size="sm"
				>
					Notify me
				</Button>
			</CardFooter>
		</Card>
	);
}
