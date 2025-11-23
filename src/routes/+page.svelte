<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaMedium from 'svelte-icons/fa/FaMedium.svelte';
	import { modalOpened } from '$lib/store';

	if (typeof window !== 'undefined') {
		particlesJS.load('particles-js', 'assets/particles.json', function () {
			console.log('callback - particles.js config loaded');
		});
	}
</script>

<div id="particles-js" />

<svelte:head>
	<title>Home</title>
	<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" async></script>
</svelte:head>
<main>
	<div>
		<h1 id="header">
			<div class="typewriter">
				<h3>
					<span id="print">print</span>(<span id="greeting">"Hi! I'm Satwik Misra"</span>)
				</h3>
			</div>
			<p class="subtitle">Technical Product Manager @ Cognex Corp</p>
		</h1>
		<div class="icons">
			<div
				role="button"
				tabindex="0"
				on:keypress={() => {
					modalOpened.set(true);
				}}
				on:click={() => {
					modalOpened.set(true);
				}}
			>
				<div class="icon">
					<FaEnvelope />
				</div>
			</div>

			<a
				href="https://github.com/satm-24"
				aria-label="GitHub"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon">
					<FaGithub />
				</div>
			</a>
			<a
				href="https://www.linkedin.com/in/satwik-misra/"
				aria-label="Linkedin"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon">
					<FaLinkedin />
				</div>
			</a>
		</div>
	</div>
</main>

<style>
	#particles-js {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0;
		pointer-events: none;
	}

	.typewriter {
		padding: 10px 14px;
		border-radius: 12px;
		background: rgba(0, 0, 0, 0.24);
		border: 1px solid rgba(255, 255, 255, 0.06);
	}

	.typewriter h3 {
		overflow: hidden;
		border-right: 0.15em solid #ca3c25;
		white-space: nowrap;
		margin: 0 auto;
		letter-spacing: 0.08em;
		animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
		max-width: 100%;
		font-size: clamp(16px, 3.5vw, 22px);
		line-height: 1.5;
		text-align: center;
	}

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: #ca3c25;
		}
	}

	span {
		padding: 0px;
	}

	#print {
		color: #49d5f5;
	}

	#greeting {
		color: #f2ee6d;
	}

	a {
		color: white;
		text-decoration: none;
	}
	main {
		position: relative;
		z-index: 1;
		text-align: center;
		margin: 0 auto;
		text-align: center;

		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
		padding: 0 12px;
	}

	h1 {
		font-weight: 700;
		line-height: 1.3;
	}

	#header {
		margin: 60px auto 0;
		font-size: clamp(28px, 6vw, 40px);
		max-width: 800px;
		display: flex;
		flex-direction: column;
		gap: 24px;
		align-items: center;
		padding: 36px 32px;
		border-radius: 18px;
		background: rgba(0, 0, 0, 0.35);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
	}

	.subtitle {
		margin: 0;
		font-size: clamp(22px, 5vw, 32px);
		color: #f7f7f7;
		letter-spacing: 0.02em;
		text-align: center;
		line-height: 1.4;
		max-width: 600px;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 32px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #ca3c25;
	}

	@media (min-width: 900px) {
		#header {
			font-size: 48px;
		}
	}

	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}

	@media (max-width: 600px) {
		.typewriter h3 {
			white-space: normal;
			border-right: none;
			animation: none;
			letter-spacing: 0.05em;
			line-height: 1.4;
			text-align: center;
		}

		main {
			padding: 0 20px 20px;
			align-items: center;
		}

		#header {
			text-align: center;
			align-items: center;
			padding: 28px 22px;
			gap: 18px;
		}

		.subtitle {
			text-align: center;
			font-size: 21px;
		}
	}
</style>
