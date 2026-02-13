'use client';

import './style.css';
import photo from '../assets/photo.png';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

import Tilt from 'react-parallax-tilt';

const About = () => {
	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 about flex flex-col gap-20">
			<div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-20">
				<div className="text flex flex-col gap-8">
					<h3>I am Anna Zoi</h3>
					<h2>Full-Stack Developer.</h2>
					<p>I turn complex ideas into intuitive, high-performing digital products.</p>
					<div>
						<div className="max-w-fit m-auto lg:ml-0 mt-6 link">
							<button>Download CV</button>
							<ArrowDownTrayIcon className="size-4 m-auto" />
						</div>
						{/* social */}
						<div></div>
					</div>
				</div>
				<div className="photo m-auto md:ml-auto">
					<Tilt glareEnable={false} glareMaxOpacity={0} scale={1} tiltMaxAngleX={8} tiltMaxAngleY={8}>
						<img src={photo.src} alt="Anna Zoi" />
					</Tilt>
				</div>
			</div>
			<div className="statics">
				<div>
					<p>10+ </p>
					<span>Projects Built</span>
				</div>
				<div>
					<p>14+ </p>
					<span>Live Websites</span>
				</div>
				<div>
					<p>5+</p>
					<span>Years of Experience</span>
				</div>
				<div>
					<p>5+</p>
					<span>Full-Stack Applications</span>
				</div>
			</div>
		</div>
	);
};

export default About;
