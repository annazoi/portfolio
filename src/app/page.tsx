import About from '@/components/about';
import Projects from '@/components/projects';
import Navbar from '@/components/ui/navbar';

export default function Home() {
	return (
		<div>
			<Navbar />
			<main>
				<About />
				<Projects />
			</main>

			<footer></footer>
		</div>
	);
}
