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
			Software Engineer and Product Manager
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

        .typewriter h3 {
                overflow: hidden;
                border-right: 0.15em solid #ca3c25;
                white-space: nowrap;
                margin: 0 auto;
                letter-spacing: 0.15em;
                animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
                max-width: 100%;
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
                padding: 0;
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
	}

	main > h1 {
		margin: 50px 10px 0;
		font-size: 36px;
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
		margin: 50px auto 0;
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
		main > h1 {
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
                }

                main {
                        padding: 0 20px;
                        align-items: flex-start;
                }

                #header {
                        text-align: left;
                }
        }
</style>
