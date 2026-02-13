import About from '@/components/about';
import Projects from '@/components/projects';
import Navbar from '@/components/ui/navbar';
import Skills from '@/components/skills';

export default function Home() {
	return (
		<div>
			<Navbar />
			<main>
				<About />
				<Projects />
				<Skills />
			</main>

			<footer></footer>
		</div>
	);
}
