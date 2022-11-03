import emoji from "react-easy-emoji";

export const greetings = {
	name: "Arif Ibrahim",
	title: "Hi all, I'm Arif",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Java,Laravel,Native PHP",
	resumeLink:
		"https://docs.google.com/document/d/14ZUzuLBt8BXT3QfHrKvF0Ovm9yD9t5su/edit?usp=share_link&ouid=104457513602862408368&rtpof=true&sd=true",
};

export const openSource = {
	githubUserName: "arifibrahim98",
};

export const contact = {};

export const socialLinks = {
	url: "https://arifibrahim98.github.io/",
	linkedin: "https://www.linkedin.com/in/arifibrahim98/",
	
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive  websites using PHP"),
				emoji(
					"⚡ Building PHP API to communicate between Flutter apps and Web apps"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

			
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		
	
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Politeknik Mersing,Johor",
		subHeader: "Diploma in Information Technology(Digital Technology)track Software and Application Development",
		duration: "December 2019 - December 2022",
		grade: "CGPA : 3.48 ",
		
	},
];

export const experience = [
	{
		role: "Full Stack Developer",
		company: "D.E.W Technology",
		companylogo: "/img/icons/common/Company-logo.jpeg",
		date: "August 2022 – December 2022",
		desc: "I worked as Full Stack developer to develop web based admin dashboards for mulitple apps using  Bootstrap, jQuery, Chart.js and some other libraries.\n i also worked on Flutter project and design PHP API to communicate between web apps and mobile apps ",
	},
	
];

export const projects = [
	
];

export const feedbacks = [
	
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Arif Ibrahim",
	description:
		"A passionate Full Stack Web Developer ",
	author: "Hanzla Tauqeer",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"Arif",
		"Arif Ibrahim",
		"@arifibrahim98",
		
	],
}
