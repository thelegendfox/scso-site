import "./globals.css";
import type { Metadata } from "next";
import { firaSans, exo2, notoSans } from "./ui/fonts";
import Footer from "@/components/footer";

import { Provider } from "@/components/ui/provider";
import { ChakraProvider, Flex } from "@chakra-ui/react";

export const metadata: Metadata = {
	title: "[SKRP] Sarasota County Sheriff's Office",
	description: "Siesta Key Roleplay - Sarasota County Sheriff's Office",
};

const style = {
	color: "white",
	backgroundColor: "rgb(0,0,0)",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${notoSans.className} antialiased bg-black`}
				style={style}
				suppressHydrationWarning
			>
				<Provider>
					<Flex direction="column" bg="rgb(0,0,0)">
						{children}

						<Footer />
					</Flex>
				</Provider>
			</body>
		</html>
	);
}
