<!-- @migration-task Error while migrating Svelte code: structuredClone is not defined -->
<script>
	import { onMount } from 'svelte';
	import skills from '$lib/Skills';

	onMount(() => {
		particlesJS.load('particles-js', 'assets/particles.json', function () {});
	});
</script>

<div id="particles-js" />

<svelte:head>
	<title>Satwik Misra — About</title>
	<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" async></script>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p class="text">
			Hi, I'm Satwik! I'm a Technical Product Manager based in Cambridge, Massachusetts, with over
			one year of internship experience in full-stack development, and another year of being a
			full-time technical product manager at Cognex Corporation. I graduated from Northeastern in
			2024, majoring in Computer Science with a concentration in Artificial Intelligence. I am very
			interested in the financial realm, especially regarding using software to make financial
			education more accessible. As I've transitioned to product, my interest has also grown into
			bridging together my love of finance, data, and tech to understand customer needs in the
			field, analyze viability, and work on deplyoing new tools and solutions in the machine vision
			space as well as improving existing ones.

			<br />
			<br />

			When I'm not working, I have a bunch of other interests that keep me busy. I love sports and
			played baseball throughout most of my childhood. As a true Bostonian, I'm a big fan of the
			Patriots, Sox, and Celtics. I'm currently getting back into the electric guitar, and will one
			day reach my goal of shredding like Prince. Traveling is also something I'm very enthusiastic
			about, as I love to have the opportunity to learn about customs around the world and
			understand cultures from a historical persepctive. I've been to only 12 countries so far, but
			I plan to eventually visit all 7 continents (including Antarctica!). Language learning is
			another hobby I've picked up, and I'm currently learning French and improving my Hindi. Making
			and listening to music (particularly hip-hop/rnb) has always been a big part of my life as
			well. If any of these things interest you as well, let's connect 😁

			<br />
			<br />

			Feel free to reach out to me if you have any questions or just want to chat!
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
		height: 100dvh;
		z-index: 0;
		pointer-events: none;
	}

	.container {
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
		box-sizing: border-box;
		margin: 0 auto;
		text-align: left;
		/* padding: clamp(110px, 15vh, 200px) clamp(18px, 6vw, 36px) 80px; */
	}

	main {
		position: relative;
		z-index: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 12px;
		text-align: left;
		line-height: 1.7;
		box-sizing: border-box;
		margin: 0 auto;
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

	p {
		margin: 0 10px 0;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media (max-width: 900px) {
		.container {
			padding: clamp(96px, 16vh, 150px) clamp(16px, 6vw, 28px) 60px;
		}
	}

	@media (min-width: 350px) {
		.text {
			margin-left: 0px;
		}
	}
</style>
