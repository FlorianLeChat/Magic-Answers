<script lang="ts">
    import type { RevealVariant } from "$lib/data/magic-answers";
    import type { Theme } from "$lib/types/theme";

    let {
        answer,
        theme = "light" as Theme,
        variant = "fade" as RevealVariant,
        easterEgg = false,
        visible = false
    }: {
        answer: string;
        theme?: Theme;
        variant?: RevealVariant;
        easterEgg?: boolean;
        visible?: boolean;
    } = $props();

    const tiles = Array.from( { length: 24 }, ( _, i ) => i );
</script>

{#if visible}
    <div class="relative mt-8 flex min-h-57.5 items-start justify-center">
        <div
            class={`card-shell ${ visible ? "show" : "" } ${ variant } ${ easterEgg ? "heart-mode" : "" } ${
                theme === "light" ? "light" : "dark"
            }`}
        >
            {#if easterEgg}
                <div class="heart-blur"></div>
            {:else if variant === "mosaic"}
                <div class="mosaic-overlay" aria-hidden="true">
                    {#each tiles as tile ( tile )}
                        <span style={`animation-delay:${ tile * 0.03 }s`}></span>
                    {/each}
                </div>
            {/if}

            <div class={`card-face ${ variant === "flip" && !easterEgg ? "spoiler-text" : "" }`}>
                <p>{answer}</p>
            </div>
        </div>
    </div>
{/if}

<style>
    .card-shell {
        position: relative;
        width: min(100%, 290px);
        aspect-ratio: 1.22;
        overflow: hidden;
        border-radius: 20px;
        opacity: 0;
        transform: translateY(18px) scale(0.96);
    }

    .card-shell.show {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    .card-face {
        position: relative;
        display: grid;
        height: 100%;
        width: 100%;
        place-items: center;
        padding: 2rem;
        text-align: center;
        font-size: 1.1rem;
        font-weight: 500;
        z-index: 2;
    }

    .light {
        background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.1)),
            radial-gradient(circle at 22% 100%, rgba(249, 115, 22, 0.95), transparent 24%),
            radial-gradient(circle at 68% 92%, rgba(255, 255, 255, 0.9), transparent 20%),
            radial-gradient(circle at 100% 45%, rgba(251, 146, 60, 0.65), transparent 24%),
            linear-gradient(180deg, #f1dde5 0%, #f8f1f4 100%);
        box-shadow: 0 22px 50px rgba(153, 118, 144, 0.18);
        color: #222;
    }

    .dark {
        background:
            radial-gradient(circle at 18% 100%, rgba(37, 99, 235, 0.95), transparent 26%),
            radial-gradient(circle at 52% 100%, rgba(139, 92, 246, 0.85), transparent 24%),
            radial-gradient(circle at 100% 22%, rgba(219, 39, 119, 0.65), transparent 18%),
            linear-gradient(180deg, rgba(25, 0, 56, 0.9) 0%, rgba(53, 8, 100, 0.72) 100%);
        box-shadow: 0 22px 60px rgba(75, 0, 130, 0.34);
        color: white;
    }

    .card-shell.fade {
        animation: fade-reveal 0.75s ease forwards;
    }

    .card-shell.flip {
        transform-origin: center center;
        animation: flip-reveal 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }

    .card-shell.mosaic {
        animation: fade-reveal 0.7s ease forwards;
    }

    .mosaic-overlay {
        position: absolute;
        inset: 0;
        z-index: 3;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }

    .mosaic-overlay span {
        background: rgba(255, 255, 255, 0.22);
        backdrop-filter: blur(10px);
        animation: mosaic-tile 0.55s ease forwards;
    }

    .spoiler-text p {
        animation: spoiler-reveal 1.3s ease forwards;
        filter: blur(7px);
        opacity: 0.72;
    }

    .heart-mode.light {
        background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02)),
            linear-gradient(180deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75));
    }

    .heart-mode.dark {
        background:
            linear-gradient(180deg, rgba(9, 3, 28, 0.98), rgba(15, 6, 34, 0.96)),
            linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01));
    }

    .heart-blur {
        position: absolute;
        inset: 0;
        z-index: 1;
        display: grid;
        place-items: center;
    }

    .heart-blur::before {
        content: "";
        width: 115px;
        height: 115px;
        background: radial-gradient(circle, rgba(244, 114, 182, 0.95), rgba(236, 72, 153, 0.58) 45%, transparent 72%);
        filter: blur(18px);
        clip-path: path(
            "M 50 90 C 20 72, 0 50, 0 28 C 0 7, 17 0, 30 0 C 42 0, 50 10, 50 10 C 50 10, 58 0, 70 0 C 83 0, 100 7, 100 28 C 100 50, 80 72, 50 90 Z"
        );
        transform: scale(1.45);
        opacity: 0.95;
    }

    .dark .heart-blur::before {
        background: radial-gradient(circle, rgba(192, 132, 252, 0.96), rgba(168, 85, 247, 0.62) 45%, transparent 72%);
        filter: blur(20px);
    }

    .heart-mode .card-face p {
        position: relative;
        z-index: 2;
    }

    @keyframes fade-reveal {
        from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes flip-reveal {
        0% {
            opacity: 0;
            transform: perspective(900px) rotateX(72deg) scale(0.9);
        }
        45% {
            opacity: 1;
            transform: perspective(900px) rotateX(0deg) scale(1.02);
        }
        100% {
            opacity: 1;
            transform: perspective(900px) rotateX(0deg) scale(1);
        }
    }

    @keyframes mosaic-tile {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.7);
        }
    }

    @keyframes spoiler-reveal {
        0%,
        40% {
            filter: blur(8px);
            opacity: 0.6;
        }
        100% {
            filter: blur(0);
            opacity: 1;
        }
    }

    @media (max-width: 640px) {
        .card-shell {
            width: min(100%, 260px);
        }

        .card-face {
            padding: 1.5rem;
            font-size: 1rem;
        }
    }
</style>
