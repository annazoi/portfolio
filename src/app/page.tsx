import About from '@/components/about';
import Navbar from '@/components/ui/navbar';

export default function Home() {
	return (
		<div>
			<Navbar />
			<main>
				<About />
			</main>

			<footer></footer>
		</div>
	);
}
