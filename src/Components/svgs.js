import React from "react";
import styled from "styled-components";

const Logo = styled.svg`
	width: 45px;
	height: 45px;
	margin: 2.5px;
	fill: ${(props) => props.theme.primary};
	a:hover & {
		fill: ${(props) => props.theme.accent};
	}
`;
const LogoSmall = styled(Logo)`
	width: 18px;
	height: 18px;
	margin: 10px;
	fill: ${(props) => props.theme.primary};
	cursor: pointer;
`;
const SMLogoSB = styled.svg`
	width: 25px;
	height: 25px;
	margin: 2.5px;
	fill: ${(props) => props.theme.primary};
	a:hover & {
		fill: ${(props) => props.theme.accent};
	}
`;
const SMLogo = styled(SMLogoSB)`
  width: 30px;
  height: 30px;
  margin 5px;
  fill: ${(props) => props.theme.text}
`;

// To disable warning about anchors needing content to be readable by screen reader
// eslint-disable-next-line
export const GithubSB = () => (
	<a href={"https://github.com/Chett23"} target='_blank'>
		<SMLogoSB
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="github-square"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
		>
			<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
		</SMLogoSB>
	</a>
);
// eslint-disable-next-line
export const Github = () => (
	<a href={"https://github.com/Chett23"} target='_blank'>
		<SMLogo
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="github-square"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
		>
			<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
		</SMLogo>
	</a>
);
// eslint-disable-next-line
export const LinkedinSB = () => (
	<a href={"https://www.linkedin.com/in/chester-hansen/"} target='_blank'>
		<SMLogoSB
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="linkedin"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
		>
			<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
		</SMLogoSB>
	</a>
);
// eslint-disable-next-line
export const Linkedin = () => (
	<a href={"https://www.linkedin.com/in/chester-hansen/"} target='_blank'>
		<SMLogo
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="linkedin"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
		>
			<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
		</SMLogo>
	</a>
);
export const Hamburger = () => (
	<LogoSmall
		data-prefix="fas"
		data-icon="bars"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
	>
		<path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
	</LogoSmall>
);
export const Email = () => (
	<a class="mailto" href="mailto:chesterehansen@gmail.com">
		<SMLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
		</SMLogo>
	</a>
);
export const EmailSB = () => (
	<a class="mailto" href="mailto:chesterehansen@gmail.com">
		<SMLogoSB xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
		</SMLogoSB>
	</a>
);
export const DarkMode = () => (
  // eslint-disable-next-line
	<a>
		<SMLogo
			width="29"
			height="29"
			viewBox="0 0 29 29"
			xmlns="http://www.w3.org/2000/svg"
			data-astro-cid-2qgkmv3k=""
		>
			<g data-astro-cid-2qgkmv3k="">
				<path
					d="M18.6431 8.13281C18.1998 7.99524 17.946 8.59577 18.2742 8.92401V8.92401C21.4878 12.1376 21.4878 17.3479 18.2742 20.5615C16.024 22.8117 12.7948 23.4863 9.95756 22.5852C9.67267 22.4947 9.42319 22.8301 9.63455 23.0415V23.0415C13.1374 26.5443 18.8167 26.5443 22.3195 23.0415C25.8224 19.5386 25.8224 13.8593 22.3195 10.3565C21.2545 9.29143 19.9882 8.5502 18.6431 8.13281Z"
					data-astro-cid-2qgkmv3k=""
				></path>
				<path
					opacity="0.5"
					d="M8.38219 3.2998C8.62112 2.40071 9.8971 2.40071 10.136 3.29981L10.5752 4.95242C10.6439 5.21072 10.8229 5.42562 11.0645 5.53979L12.9668 6.43848C13.6598 6.7659 13.6598 7.75189 12.9668 8.0793L11.0645 8.978C10.8229 9.09216 10.6439 9.30706 10.5752 9.56536L10.136 11.218C9.8971 12.1171 8.62112 12.1171 8.38219 11.218L7.943 9.56536C7.87436 9.30706 7.69533 9.09216 7.45368 8.978L5.55146 8.0793C4.85844 7.75189 4.85844 6.7659 5.55146 6.43848L7.45368 5.53979C7.69533 5.42562 7.87436 5.21072 7.943 4.95242L8.38219 3.2998Z"
					data-astro-cid-2qgkmv3k=""
				></path>
				<path
					opacity="0.3"
					d="M4.41646 16.2487C4.63581 15.4866 5.71573 15.4866 5.93507 16.2487V16.2487C5.99767 16.4662 6.15054 16.6464 6.35492 16.7436L6.62931 16.8742C7.31937 17.2025 7.31937 18.1846 6.62931 18.5129L6.35492 18.6434C6.15054 18.7407 5.99767 18.9209 5.93507 19.1384V19.1384C5.71573 19.9005 4.63581 19.9005 4.41646 19.1384V19.1384C4.35386 18.9209 4.20099 18.7407 3.99661 18.6434L3.72222 18.5129C3.03216 18.1846 3.03216 17.2025 3.72222 16.8742L3.99661 16.7436C4.20099 16.6464 4.35386 16.4662 4.41646 16.2487V16.2487Z"
					data-astro-cid-2qgkmv3k=""
				></path>
			</g>
		</SMLogo>
	</a>
);
export const LightMode = () => (
  // eslint-disable-next-line
	<a>
		<SMLogo
			width="29"
			height="29"
			viewBox="0 0 29 29"
			xmlns="http://www.w3.org/2000/svg"
			data-astro-cid-2qgkmv3k=""
		>
			<path
				d="M6.65647 6.61473C7.17328 6.09921 7.1736 5.26212 6.65717 4.74621L6.15486 4.24442C5.63882 3.7289 4.80235 3.73006 4.28774 4.24702V4.24702C3.77544 4.76166 3.77544 5.59359 4.28774 6.10823L4.78865 6.61143C5.30337 7.1285 6.13993 7.12998 6.65647 6.61473V6.61473ZM3.95455 14.5C3.95455 13.7687 3.36168 13.1758 2.63034 13.1758H1.3242C0.592865 13.1758 0 13.7687 0 14.5V14.5C0 15.2313 0.592865 15.8242 1.3242 15.8242H2.63034C3.36168 15.8242 3.95455 15.2313 3.95455 14.5V14.5ZM15.8182 1.31818C15.8182 0.590169 15.228 0 14.5 0V0C13.772 0 13.1818 0.59017 13.1818 1.31818V2.58821C13.1818 3.31622 13.772 3.90639 14.5 3.90639V3.90639C15.228 3.90639 15.8182 3.31622 15.8182 2.58821V1.31818ZM24.7136 6.10693C25.2251 5.59301 25.2251 4.76224 24.7136 4.24832V4.24832C24.1987 3.73107 23.3613 3.73107 22.8465 4.24832L22.3455 4.75151C21.834 5.26544 21.8339 6.0962 22.3455 6.61013V6.61013C22.8604 7.12738 23.6977 7.12738 24.2126 6.61013L24.7136 6.10693ZM22.3258 22.3965C21.8174 22.9072 21.8163 23.7323 22.3232 24.2445L22.8359 24.7623C23.3489 25.2806 24.1859 25.2817 24.7004 24.7649V24.7649C25.2115 24.2514 25.2104 23.421 24.6978 22.9089L24.1822 22.3939C23.6692 21.8813 22.8375 21.8825 22.3258 22.3965V22.3965ZM26.3697 13.1758C25.6383 13.1758 25.0455 13.7687 25.0455 14.5V14.5C25.0455 15.2313 25.6383 15.8242 26.3697 15.8242H27.6758C28.4071 15.8242 29 15.2313 29 14.5V14.5C29 13.7687 28.4071 13.1758 27.6758 13.1758H26.3697ZM14.5 6.55479C10.1368 6.55479 6.59091 10.1169 6.59091 14.5C6.59091 18.8831 10.1368 22.4452 14.5 22.4452C18.8632 22.4452 22.4091 18.8831 22.4091 14.5C22.4091 10.1169 18.8632 6.55479 14.5 6.55479ZM13.1818 27.6818C13.1818 28.4098 13.772 29 14.5 29V29C15.228 29 15.8182 28.4098 15.8182 27.6818V26.4118C15.8182 25.6838 15.228 25.0936 14.5 25.0936V25.0936C13.772 25.0936 13.1818 25.6838 13.1818 26.4118V27.6818ZM4.28127 22.8931C3.77213 23.4074 3.77329 24.2362 4.28386 24.7491V24.7491C4.79976 25.2673 5.63906 25.2662 6.15352 24.7465L6.65964 24.2352C7.16878 23.7209 7.16762 22.8921 6.65705 22.3792V22.3792C6.14115 21.861 5.30185 21.8621 4.78739 22.3818L4.28127 22.8931Z"
				data-astro-cid-2qgkmv3k=""
			></path>
		</SMLogo>
	</a>
);
