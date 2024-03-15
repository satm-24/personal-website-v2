<script>
	if (typeof window !== 'undefined') {
		particlesJS.load('particles-js', 'assets/particles.json', function () {
			console.log('callback - particles.js config loaded');
		});
	}
</script>

<div id="particles-js" />

<svelte:head>
	<title>Resume</title>
	<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" async></script>
</svelte:head>

<main>
	<!-- svelte-ignore a11y-missing-attribute -->
	<iframe id="resume-pdf" src="/Satwik_Misra_Resume.pdf" frameBorder="0" />
</main>

<style>
	#resume-pdf {
		width: 100%;
		height: 1150px;
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
