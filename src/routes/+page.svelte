<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
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
                        <p class="description">
                                I bridge technical and financial insight to bring scalable machine-vision products to market,
                                using data to deeply understand customer needs.
                        </p>
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
                height: 100dvh;
                z-index: 0;
        }

        #particles-js canvas {
                pointer-events: auto;
        }

        .typewriter {
                padding: 0;
                margin-bottom: 4px;
        }

        .typewriter h3 {
                overflow: hidden;
                border-right: 0.15em solid #ca3c25;
                white-space: nowrap;
                margin: 0 auto;
                letter-spacing: 0.06em;
                animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
                max-width: 100%;
                font-size: clamp(14px, 3.6vw, 18px);
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
                min-height: calc(100dvh - 80px - 88px);
                justify-content: center;
                align-items: center;
                padding: 12px clamp(16px, 6vw, 28px) 20px;
        }

	h1 {
		font-weight: 700;
		line-height: 1.3;
	}

        #header {
                margin: 56px auto 0;
                font-size: clamp(26px, 4.8vw, 36px);
                max-width: 760px;
                display: flex;
                flex-direction: column;
                gap: clamp(12px, 3vw, 18px);
                align-items: center;
                padding: 10px;
        }

        .subtitle {
                margin: 0;
                font-size: clamp(16px, 4.4vw, 24px);
                color: #f3f3f3;
                letter-spacing: 0.01em;
                text-align: center;
                line-height: 1.3;
                max-width: 620px;
                font-weight: 600;
        }

        .description {
                margin: 0;
                color: #d7d7d7;
                font-size: clamp(14px, 4vw, 19px);
                line-height: 1.55;
                max-width: 670px;
                text-align: center;
        }

        .icons {
                display: flex !important;
                justify-content: center !important;
                align-items: center;
                gap: clamp(14px, 4vw, 20px);
                cursor: pointer;
                font-size: clamp(26px, 5vw, 32px);
                display: flex;
                justify-content: space-between;
                max-width: 200px;
                margin: 32px auto 0;
        }

        .icon {
                cursor: pointer;
                transition: color 0.2s ease-in-out, transform 0.2s ease-in-out, background 0.2s ease-in-out;
                width: clamp(36px, 8vw, 44px);
                height: clamp(36px, 8vw, 44px);
                display: grid;
                place-items: center;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .icon:hover {
                color: #ca3c25;
                transform: translateY(-2px);
                background: rgba(202, 60, 37, 0.12);
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
                        padding: max(14px, env(safe-area-inset-top))
                                        max(18px, env(safe-area-inset-right))
                                        22px
                                        max(18px, env(safe-area-inset-left));
                        align-items: center;
                }

                #header {
                        text-align: center;
                        align-items: center;
                        padding: 18px 10px 12px;
                        gap: 12px;
                        margin-top: 42px;
                }

                .subtitle {
                        text-align: center;
                        font-size: 18px;
                }
        }

        @media (max-width: 430px) {
                #header {
                        margin-top: 30px;
                        gap: 10px;
                }

                .typewriter h3 {
                        letter-spacing: 0.04em;
                        line-height: 1.35;
                }

                .description {
                        font-size: clamp(13px, 4.6vw, 17px);
                        line-height: 1.6;
                }

                .icons {
                        margin-top: 28px;
                }
        }
</style>
