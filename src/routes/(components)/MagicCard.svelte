<script lang="ts">
    import type { Theme } from "$lib/types/theme";
    import type { RevealVariant } from "$lib/data/magic-answers";

    let {
        answer,
        theme,
        variant,
        easterEgg,
        visible
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
    <div class="relative mt-8 flex items-start justify-center">
        <div
            class="card-shell relative overflow-hidden rounded-2xl opacity-0
            w-87.5 h-62.5 translate-y-4.5 aspect-[1.22]"
            class:scale-100={visible}
            class:opacity-100={visible}
            class:translate-y-0={visible}
            class:fade={variant === "fade"}
            class:flip={variant === "flip"}
            class:light={theme === "light"}
            class:dark={theme !== "light"}
            class:mosaic={variant === "mosaic"}
            class:heart-mode={easterEgg}
        >
            {#if easterEgg}
                <div class="heart-blur absolute inset-0 z-1 grid place-items-center"></div>
            {:else if variant === "mosaic"}
                <div
                    class="mosaic-overlay absolute inset-0 z-3 grid grid-cols-6 grid-rows-4"
                    aria-hidden="true"
                >
                    {#each tiles as tile ( tile )}
                        <span
                            class="bg-white/20 backdrop-blur-md"
                            style={`animation-delay: ${ ( tile % 6 + Math.floor( tile / 6 ) ) * 0.03 }s`}
                        ></span>
                    {/each}
                </div>
            {/if}

            <div
                class="relative z-2 grid h-full w-full place-items-center
                   p-8 text-center text-lg font-medium backdrop-blur-md"
                class:spoiler-text={variant === "flip" && !easterEgg}
            >
                <p class="relative z-2">{answer}</p>
            </div>
        </div>
    </div>
{/if}

<style>
    @reference "../app.css";

    .light {
        @apply text-zinc-800;
        background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.1)),
            radial-gradient(circle at 22% 100%, rgba(249, 115, 22, 0.95), transparent 24%),
            radial-gradient(circle at 68% 92%, rgba(255, 255, 255, 0.9), transparent 20%),
            radial-gradient(circle at 100% 45%, rgba(251, 146, 60, 0.65), transparent 24%),
            linear-gradient(180deg, #f1dde5 0%, #f8f1f4 100%);
        box-shadow: 0 22px 50px rgba(153, 118, 144, 0.18);
    }

    .dark {
        @apply text-white;
        background:
            radial-gradient(circle at 18% 100%, rgba(37, 99, 235, 0.95), transparent 26%),
            radial-gradient(circle at 52% 100%, rgba(139, 92, 246, 0.85), transparent 24%),
            radial-gradient(circle at 100% 22%, rgba(219, 39, 119, 0.65), transparent 18%),
            linear-gradient(180deg, rgba(25, 0, 56, 0.9) 0%, rgba(53, 8, 100, 0.72) 100%);
        box-shadow: 0 22px 60px rgba(75, 0, 130, 0.34);
    }

    @media (prefers-reduced-motion: no-preference) {
        .card-shell.fade {
            animation: fade-reveal 0.75s ease forwards;
        }

        .card-shell.flip {
            animation: flip-reveal 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .card-shell.mosaic {
            animation: fade-reveal 0.7s ease forwards;
        }

        .mosaic-overlay span {
            animation: mosaic-tile 0.55s ease forwards;
        }

        .spoiler-text p {
            @apply blur-sm opacity-70;
            animation: spoiler-reveal 1.3s ease forwards;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .card-shell,
        .spoiler-text p,
        .mosaic-overlay span {
            @apply opacity-100! blur-none! backdrop-blur-none! animate-none! transform-none!;
        }
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

    .heart-blur::before {
        @apply opacity-95 blur-lg w-26.25 h-22.5 scale-[1.45];
        content: "";
        background: radial-gradient(circle, rgba(244, 114, 182, 0.95), rgba(236, 72, 153, 0.58) 45%, transparent 72%);
        clip-path: path(
            "M 50 90 C 20 72, 0 50, 0 28 C 0 7, 17 0, 30 0 C 42 0, 50 10, 50 10 C 50 10, 58 0, 70 0 C 83 0, 100 7, 100 28 C 100 50, 80 72, 50 90 Z"
        );
    }

    .dark .heart-blur::before {
        @apply blur-lg;
        background: radial-gradient(circle, rgba(192, 132, 252, 0.96), rgba(168, 85, 247, 0.62) 45%, transparent 72%);
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
</style>
