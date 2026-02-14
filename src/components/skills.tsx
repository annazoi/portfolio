'use client';
import react from '../assets/skills/react.png';
import javascript from '../assets/skills/javascript.png';

import Image from 'next/image';

const Skills = () => {
	const skills = [
		{
			name: 'ReactJS',
			photo: react,
		},
		{
			name: 'Javascript',
			photo: javascript,
		},
		{
			name: 'NextJS',
			photo: '../assets/skills/nextjs.png',
		},
		{
			name: 'HTML',
			photo: '../assets/skills/html.png',
		},
		{
			name: 'CSS',
			photo: '../assets/skills/css.png',
		},
		{
			name: 'Firabase',
			photo: '../assets/skills/firabase.png',
		},
		{
			name: 'MongoDB',
			photo: '../assets/skills/mongodb.png',
		},
		{
			name: 'MariaDB',
			photo: '../assets/skills/mariadb.png',
		},
		{
			name: 'PostgreSQL',
			photo: '../assets/skills/postgresql.png',
		},
		{
			name: 'Typescript',
			photo: '../assets/skills/typescript.png',
		},
		{
			name: 'WebSockets',
			photo: '../assets/skills/asana.png',
		},
		{
			name: 'WebRTC',
			photo: '../assets/skills/asana.png',
		},
		{
			name: 'Prisma',
			photo: '../assets/skills/prisma.png',
		},
		{
			name: 'NodeJS',
			photo: '../assets/skills/nodejs.png',
		},
		{
			name: 'ExpressJS',
			photo: '../assets/skills/expressjs.png',
		},

		{
			name: 'NestJS',
			photo: '../assets/skills/nestjs.png',
		},

		{
			name: 'PHP',
			photo: '../assets/skills/php.png',
		},

		{
			name: 'Java',
			photo: '../assets/skills/java.png',
		},

		{
			name: 'Python',
			photo: '../assets/skills/python.png',
		},

		{
			name: 'C',
			photo: '../assets/skills/c.png',
		},
		{
			name: 'Prolog',
			photo: '../assets/skills/prolog.png',
		},
		{
			name: 'Android Studio',
			photo: '../assets/skills/androidStudio.png',
		},
		{
			name: 'Ionic',
			photo: '../assets/skills/ionic.png',
		},
		{
			name: 'Material UI',
			photo: '../assets/skills/materialUI.png',
		},
		{
			name: 'Chakra UI',
			photo: '../assets/skills/chakraUI.png',
		},
		{
			name: 'Git',
			photo: '../assets/skills/github.png',
		},
		{
			name: 'Slack',
			photo: '../assets/skills/slack.png',
		},
		{
			name: 'Asana',
			photo: '../assets/skills/asana.png',
		},
		{
			name: 'Trello',
			photo: '../assets/skills/trello.png',
		},
	];

	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 about flex flex-col gap-10 projects">
			<h3 className="text-center">My Skills</h3>
			{skills.map((skill, index: number) => (
				<div key={index}>
					<Image src={skill.photo} alt={skill.name} width={128} height={128}></Image>
				</div>
			))}
		</div>
	);
};

export default Skills;
