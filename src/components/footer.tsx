import Link from "next/link";

// import Image from "next/image";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";

export default function Footer() {
	return (
		<div className="bg-black mb-4 px-8 h-40 w-full flex flex-col">
			{/* <div className="w-full h-px bg-gray-900 ml-auto mr-auto" /> */}
			<Separator decorative={true} />

			<div className="flex flex-row justify-around bg-linear-to-br from-zinc-700 to-stone-900 shadow-md rounded-full p-2 h-16 w-48 m-auto">
				<Tooltip>
					<TooltipTrigger>
						<Link
							className="m-auto"
							href="https://discord.gg/VuZ2VJGRgd"
							rel="noopener noreferrer"
						>
							<Image
								src="/Discord-Symbol-White.svg"
								alt="The Discord logo"
								width={190}
								height={150}
								className="aspect-auto m-auto w-10"
							/>
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>Join the SKRP SCSO Discord server</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger>
						<Link
							className="m-auto"
							href="https://github.com/thelegendfox"
							rel="noopener noreferrer"
						>
							<Image
								src="/Github_Invertocat_Light.svg"
								alt="The Github logo"
								width={153}
								height={150}
								className="aspect-auto w-10"
							/>
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>See my GitHub</p>
					</TooltipContent>
				</Tooltip>
			</div>
			<p className="text-center m-auto text-white">
				Copyright &copy; 2025 thelegendfox All Rights Reserved.
			</p>
			<p className="text-xs text-zinc-400 text-center">
				The Sarasota County Sheriff's Office, Siesta Key Roleplay,
				Central Roleplay Community (and Maple County), as well as all
				other copyrighted symbols used on this page are copyrighted by
				their respective organizations, companies, agencies, etc. No
				ownership is claimed over these and these symbols are used under
				either permissable circumstances, Fair Use, or are part of the
				Public Domain. No agencies mentioned have had any part in the
				development of this site.
			</p>
		</div>
	);
}
