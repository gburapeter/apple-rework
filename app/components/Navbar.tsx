import React from "react";

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@nextui-org/react";

export default function MyNavbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = ["Mac", "iPhone", "iPad", "Help & Feedback", "Log Out"];

	return (
		<Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				/>
			</NavbarContent>

			<NavbarContent className="sm:hidden pr-3" justify="center">
				<NavbarBrand>
					<p className="font-bold text-inherit">Apple</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-10 " justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Mac
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						iPhone
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						iPad
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Button as={Link} color="primary" variant="flat">
						Login
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full"
							color={"foreground"}
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
