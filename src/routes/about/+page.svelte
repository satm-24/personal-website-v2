<script>
	import skills from '$lib/Skills';

	if (typeof window !== 'undefined') {
		particlesJS.load('particles-js', 'assets/particles.json', function () {
			console.log('callback - particles.js config loaded');
		});
	}
</script>

<div id="particles-js" />

<svelte:head>
	<title>Satwik Misra — About</title>
	<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" async></script>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			Hi, I'm Satwik! I'm a Software Developer with over one year of internship experience in
			full-stack development with a focus on the back end. I'm currently a senior at Northeastern
			majoing in Computer Science with a concentration in Artifical Intelligence. Though I've always
			been interested in computers. I'm based in Boston, Massachusetts and currently working as a
			freelancer and coding in Node.js, React.js (and other web technologies) and Go(lang), but
			Making this website in svelte was a great experience and I'm always open to learning new
			technologies and a good challenge!
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>
						{section}:
					</h4>
					<div class="list">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</div>

<style>
	#particles-js {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0;
	}

	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		position: relative;
		z-index: 1;
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>
