import './style.css';
import photo from '../assets/photo.png';
const About = () => {
	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 about">
			<div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-20">
				<div className="text  ">
					<h3>I am Anna Zoi</h3>
					<h2>Full-Stack Developer.</h2>
					<p>I turn complex ideas into intuitive, high-performing digital products.</p>
					<div>
						<div>
							<a href="">Download CV</a>
						</div>
						{/* social */}
						<div></div>
					</div>
				</div>
				<div className="photo ml-auto">
					<img src={photo.src} alt="Anna Zoi" />
				</div>
			</div>
		</div>
	);
};

export default About;
