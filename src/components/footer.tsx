// import NextLink from "next/link";
import {
	Link,
	Text,
	Center,
	Flex,
	LinkOverlay,
	Box,
	Image,
	Popover,
	Dialog,
	Portal,
	Button,
	CloseButton,
} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { Separator, Grid, GridItem } from "@chakra-ui/react";
// import Image from "next/image";

export default function Footer() {
	return (
		<Flex bg="rgb(0,0,0)" mt="8" h="40" w="100%" direction="column">
			{/* <div className="w-full h-px bg-gray-900 ml-auto mr-auto" /> */}
			<Separator />

			{/* <Grid
				// className="w-[50%] h-[70%] gap-4 m-auto mr-16"
				w="50%"
				h="70%"
				gap={4}
				mx="auto"
				my="auto"
				mr={16}
				templateRows="repeat(2, 1fr)"
				templateColumns="repeat(2, 1fr)"
			>
				 <GridItem m="auto">
					<Link m="auto" href="#" colorPalette="teal">
						Privacy
					</Link>
				</GridItem>
				<GridItem m="auto">
					{" "}
					<Link m="auto" href="#" colorPalette="teal">
						Terms
					</Link>
				</GridItem>
				<GridItem m="auto">
					{" "}
					<Link m="auto" href="#" colorPalette="teal">
						Cookies
					</Link>
				</GridItem>
				<GridItem m="auto">
					{" "}
					<Link m="auto" href="#" colorPalette="teal">
						Disclaimers
					</Link>
				</GridItem>
				<GridItem m="auto">
					{" "}
					<Link m="auto" href="#" colorPalette="teal">
						Discord
					</Link>
				</GridItem>
				<GridItem m="auto">
					{" "}
					<Link m="auto" href="#" colorPalette="teal">
						Creator
					</Link>
				</GridItem>
			</Grid> */}

			<Flex
				direction="row"
				bg="black"
				borderRadius="full"
				p="2"
				h="16"
				w="48"
				m="auto"
			>
				<Link
					m="auto"
					href="https://discord.gg/VuZ2VJGRgd"
					rel="noopener noreferrer"
				>
					<Tooltip
						content="Join the SKRP SCSO Discord server"
						openDelay={50}
						contentProps={{
							css: {
								"--tooltip-bg": "colors.black",
								color: "white",
							},
						}}
					>
						<Image
							src="/Discord-Symbol-White.svg"
							alt="The Discord logo"
							htmlWidth={190}
							htmlHeight={150}
							w={10}
							aspectRatio="inherit"
							m="auto"
						/>
					</Tooltip>
				</Link>
				<Link
					m="auto"
					href="https://github.com/thelegendfox"
					rel="noopener noreferrer"
				>
					<Tooltip
						content="See my GitHub"
						openDelay={50}
						contentProps={{
							css: {
								"--tooltip-bg": "colors.black",
								color: "white",
							},
						}}
					>
						<Image
							src="/Github_Invertocat_Light.svg"
							alt="The Github logo"
							htmlWidth={153}
							htmlHeight={150}
							w={10}
							aspectRatio="inherit"
						/>
					</Tooltip>
				</Link>
			</Flex>
			<Text m="auto" textAlign="center">
				Copyright &copy; 2025 thelegendfox All Rights Reserved.
			</Text>
			<Dialog.Root>
				<Dialog.Trigger asChild>
					<Button
						variant="outline"
						size="sm"
						w="fit-content"
						m="auto"
					>
						Click here to view copyright disclaimers.
					</Button>
				</Dialog.Trigger>
				<Portal>
					<Dialog.Backdrop />
					<Dialog.Positioner>
						<Dialog.Content>
							<Dialog.Header>
								<Dialog.Title>
									Copyright Disclaimers
								</Dialog.Title>
							</Dialog.Header>
							<Dialog.Body>
								<Text>
									The Sarasota County Sheriff's Office, Siesta
									Key Roleplay, Central Roleplay Community
									(and Maple County), as well as all other
									copyrighted symbols used on this page are
									copyrighted by their respective
									organizations, companies, agencies, etc. No
									ownership is claimed over these and these
									symbols are used under either permissable
									circumstances, Fair Use, or are part of the
									Public Domain. No agencies mentioned have
									had any part in the development of this
									site.
								</Text>
							</Dialog.Body>
							<Dialog.Footer>
								<Dialog.ActionTrigger asChild>
									<Button variant="outline">Close</Button>
								</Dialog.ActionTrigger>
							</Dialog.Footer>
							<Dialog.CloseTrigger asChild>
								<CloseButton size="sm" />
							</Dialog.CloseTrigger>
						</Dialog.Content>
					</Dialog.Positioner>
				</Portal>
			</Dialog.Root>
		</Flex>
	);
}
