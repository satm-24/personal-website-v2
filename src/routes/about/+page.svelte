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
			Hi, I'm Satwik! I'm a Technical Product Manager based in Cambridge, Massachusetts, with over
			one year of internship experience in full-stack development, and another year of being a
			full-time technical product manager at Cognex Corporation. I graduated summa cum laude from
			Northeastern, majoring in Computer Science with a concentration in Artificial Intelligence. I
			am very interested in the financial realm, especially in using software to make financial
			education more accessible. As I've transitioned to product, my interest has also grown into
			scaling technology create more fluid hardware and software experiences across devices,
			particulaly with machine vision cameras and sensors that I work with every day at Cognex. I'm
			passionate about Working on this website and tinkering with Svelte was a lot of fun, and I'm
			always open to new technologies and challenges.

			<br />
			<br />

			When I'm not coding, I have a bunch of other interests that keep me busy. I love sports and
			played baseball throughout most of my childhood. As a true Bostonian, I'm a big fan of the
			Patriots, Sox, and Celtics. Traveling is also something I'm very enthusiastic about. I wasn't
			born in the states and moved around a lot as a kid, but I don't remember many of the places I
			went to. I plan to eventually visit all 7 continents (including Antarctica!). Language
			learning is another hobby I've picked up, and I'm currently learning French and improving my
			Hindi. Making and listening to music (particularly hip-hop/rnb) has always been a big part of
			my life as well. If any of these things interest you as well, let's connect 😁

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
		height: 100vh;
		z-index: 0;
	}

	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
		text-align: justify;
		padding: 0 30px;
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
