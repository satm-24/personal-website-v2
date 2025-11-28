<!-- @migration-task Error while migrating Svelte code: structuredClone is not defined -->
<script>
	import projects from '$lib/Projects';

	if (typeof window !== 'undefined') {
		particlesJS.load('particles-js', 'assets/particles.json', function () {});
	}
</script>

<div id="particles-js" />

<svelte:head>
	<title>Projects</title>
	<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" async></script>
</svelte:head>

<main>
	<div class="projectContainer">
		<div class="projects">
			<h1>Projects</h1>
			<p class="note">
				Note: Some of the GitHub repositories for these projects are private. If there are any
				further questions, please contact me for access.
			</p>
			{#each projects as project}
				<div class="project">
					<div class="header">
						<h2>
							{project.title}
						</h2>
						<div class="techsContainer">
							Technologies:
							<div class="techs">
								{#each project.technologies as tech}
									<div>{tech}</div>
								{/each}
							</div>
						</div>
					</div>
					<div class="gifContainer">
						{#if project.preview}
							<img src={project.preview} alt={project.title + ' GIF'} class="project-img" />
						{/if}
					</div>
					<p>
						{project.description}
					</p>
					<a href={project.url} target="_blank" rel="noreferrer">
						<div class="button">github</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	#particles-js {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100dvh;
		z-index: 0;
		pointer-events: none;
	}

	main {
		position: relative;
		z-index: 1;
		width: 100%;
		max-width: 900px;
		padding: clamp(40px, 18vh, 40px) clamp(16px, 5vw, 28px);
		box-sizing: border-box;
		margin: 0 auto;
	}

	.project-img {
		width: 75%;
		height: auto;
		align-items: center;
	}

	.projectContainer {
		width: 100%;
		box-sizing: border-box;
		margin: 0;
		text-align: left;
	}

	.note {
		opacity: 0.6;
		max-width: 900px;
		margin: clamp(14px, 2vw, 22px) 0 32px;
		padding: 0 clamp(14px, 5vw, 22px);
	}

	a {
		text-decoration: none;
	}

	.projects {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 40px;
		margin: 0;
	}

	h1 {
		font-weight: 700;
		text-align: start;
		margin: 0 0 12px 0;
	}

	h2 {
		display: flex;
		margin: 0;
	}

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: #111;
		padding: 2rem;
		width: 100%;
		border-radius: 5px;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
	}

	.project p {
		font-weight: 100;
		color: #708090;
	}

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.techs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.techs > div {
		margin: 0 0 0 10px;
	}

	.gifContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border: 2px solid white;
		padding: 10px;
		opacity: 0.7;
		transition: opacity 0.3s ease-in-out;
	}

	.button:hover {
		background-color: #cccccc;
		opacity: 1;
	}

	@media (min-width: 900px) {
		.projects > h1 {
			font-size: 48px;
			margin-bottom: 16px;
		}

		.projects {
			grid-template-columns: 1fr;
		}

		.projects .project {
			min-height: 200px;
		}
		.button {
			max-width: 200px;
		}
	}

	@media (min-width: 430px) {
		.projects {
			grid-template-columns: 1fr;
			margin: 0px;
		}
	}

	@media (max-width: 600px) {
		.project {
			padding: clamp(14px, 5vw, 20px);
		}
	}
</style>
