import {
	Geist,
	Geist_Mono,
	Fira_Sans,
	Exo_2,
	Noto_Sans,
} from "next/font/google";

export const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const firaSans = Fira_Sans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const exo2 = Exo_2({
	subsets: ["latin"],
});

export const notoSans = Noto_Sans({
	subsets: ["latin"],
});
