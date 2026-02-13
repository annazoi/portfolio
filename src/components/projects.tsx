const Projects = () => {
	const projects = [
		{
			name: 'name1',
			photo: 'photo1',
		},
		{
			name: 'name2',
			photo: 'photo2',
		},
	];

	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 about flex flex-col gap-10 projects">
			<h3 className="text-center">My Projects</h3>
			<div className="flex gap-4 m-auto ">
				{projects.map((project: any) => {
					return <div className="project">{project.name}</div>;
				})}
			</div>
		</div>
	);
};

export default Projects;
