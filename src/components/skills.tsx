'use client';
import react from '../assets/skills/react.png';
import javascript from '../assets/skills/javascript.png';
import nextjs from '../assets/skills/nextjs.png';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import firabase from '../assets/skills/firabase.png';
import mongodb from '../assets/skills/mongodb.png';
import mariadb from '../assets/skills/mariadb.png';
import prostgresql from '../assets/skills/postgresql.png';
import typescript from '../assets/skills/typescript.png';
import prisma from '../assets/skills/prisma.png';
import nodejs from '../assets/skills/nodejs.png';
import expressjs from '../assets/skills/expressjs.png';
import nestjs from '../assets/skills/nestjs.png';
import php from '../assets/skills/php.png';
import java from '../assets/skills/java.png';
import python from '../assets/skills/python.png';
import c from '../assets/skills/c.png';
import prolog from '../assets/skills/prolog.png';
import androidStudio from '../assets/skills/androidStudio.png';
import ionic from '../assets/skills/ionic.png';
import materialUI from '../assets/skills/materialUI.png';
import chakraUI from '../assets/skills/chakraUI.png';
import git from '../assets/skills/github.png';
import slack from '../assets/skills/slack.png';
import asana from '../assets/skills/asana.png';
import trello from '../assets/skills/trello.png';
import websockets from '../assets/skills/websockets.png';
import webrtc from '../assets/skills/webrtc.png';

import Image from 'next/image';

const Skills = () => {
	const skills = [
		{
			name: 'ReactJS',
			photo: react,
		},
		{
			name: 'NextJS',
			photo: nextjs,
		},
		{
			name: 'Javascript',
			photo: javascript,
		},
		{
			name: 'Typescript',
			photo: typescript,
		},

		{
			name: 'HTML',
			photo: html,
		},
		{
			name: 'CSS',
			photo: css,
		},
		{
			name: 'Firabase',
			photo: firabase,
		},
		{
			name: 'MongoDB',
			photo: mongodb,
		},
		{
			name: 'MariaDB',
			photo: mariadb,
		},
		{
			name: 'PostgreSQL',
			photo: prostgresql,
		},

		{
			name: 'WebSockets',
			photo: websockets,
		},
		{
			name: 'WebRTC',
			photo: webrtc,
		},
		{
			name: 'Prisma',
			photo: prisma,
		},
		{
			name: 'NodeJS',
			photo: nodejs,
		},
		{
			name: 'ExpressJS',
			photo: expressjs,
		},

		{
			name: 'NestJS',
			photo: nestjs,
		},

		{
			name: 'PHP',
			photo: php,
		},

		{
			name: 'Java',
			photo: java,
		},

		{
			name: 'Python',
			photo: python,
		},

		{
			name: 'C',
			photo: c,
		},
		{
			name: 'Prolog',
			photo: prolog,
		},
		{
			name: 'Android Studio',
			photo: androidStudio,
		},
		{
			name: 'Ionic',
			photo: ionic,
		},
		{
			name: 'Material UI',
			photo: materialUI,
		},
		{
			name: 'Chakra UI',
			photo: chakraUI,
		},
		{
			name: 'Git',
			photo: git,
		},
		{
			name: 'Slack',
			photo: slack,
		},
		{
			name: 'Asana',
			photo: asana,
		},
		{
			name: 'Trello',
			photo: trello,
		},
	];

	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 about flex flex-col xl:gap-10 projects gap-5">
			<h3 className="text-center">My Skills</h3>
			<div className="grid grid-cols-2  gap-4 xl:grid-cols-6 xl:gap-10 md:grid-cols-4 sm:grid-cols-3 pl-2 ">
				{skills.map((skill, index: number) => (
					<div key={index} className="skill flex flex-col xl:gap-6 gap-2">
						<Image src={skill.photo} alt={skill.name} width={60} height={60} className="m-auto"></Image>
						<h2 className="text-center">{skill.name}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
