import React from "react";

import { SiBuymeacoffee, SiUpwork } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = ({ classes }) => {
	return (
		<div
			className={`flex flex-grow-[2] p-6 gap-6 items-end justify-between xl:justify-start ${classes}`}
		>
			<div className="flex justify-center gap-4 p-2">
				<a
					href="https://linkedin.com/in/chester-hansen"
					target="_blank"
					rel="noreferrer"
				>
					<RiLinkedinFill className="size-6 rounded-sm text-background-200 dark:text-background-100 bg-font-500 p-[2px] hover:bg-accent-500" />
				</a>
				<a
					href="https://github.com/chett23"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub className="size-6 rounded-sm text-background-200 dark:text-background-100 bg-font-500 p-[2px] hover:bg-accent-500" />
				</a>
				<a
					href="https://www.buymeacoffee.com/chansendev"
					target="_blank"
					rel="noreferrer"
				>
					<SiBuymeacoffee className="size-6 rounded-sm text-background-200 dark:text-background-100 bg-font-500 p-[2px] hover:bg-accent-500" />
				</a>
				<a
					href="https://www.upwork.com/freelancers/~013b43c108bba6edb7?viewMode=1"
					target="_blank"
					rel="noreferrer"
				>
					<SiUpwork className="size-6 rounded-sm text-background-200 dark:text-background-100 bg-font-500 p-[2px] hover:bg-accent-500" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
