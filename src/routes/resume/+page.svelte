<!-- @migration-task Error while migrating Svelte code: structuredClone is not defined -->
<script>
	if (typeof window !== 'undefined') {
		particlesJS.load('particles-js', 'assets/particles.json', function () {});
	}
</script>

<div id="particles-js" />

<h2 id="contact">
	Contact <a href="mailto:satwikm24@gmail.com" id="email">satwikm24@gmail.com</a>
	for up-to-date resume.
</h2>

<style>
	#contact {
		width: 100%;
		text-align: center;
	}

	#email {
		color: aqua;
	}

	#particles-js {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0;
		pointer-events: none;
	}
</style>
