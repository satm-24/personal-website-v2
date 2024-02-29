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
	<title>Gianmarco Cavallo — About</title>
	<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" async></script>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			I'm a Software developer with over 2 years of front-end development experience, experienced in
			both enterprise and open-source software development. I'm based in Italy and currently working
			as a freelancer and coding in Node.js, React.js (and other web technologies) and Go(lang), but
			I tend to learn and use the best technology and approach to best solve the problem I'm facing.
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
		position: fixed; /* or 'absolute' if you prefer */
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0; /* Ensure this is behind all other content */
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
