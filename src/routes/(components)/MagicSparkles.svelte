<script lang="ts">
    import type { Theme } from "$lib/types/theme";

    let { active = false, theme = "light" as Theme } = $props();

    const particles = Array.from( { length: 16 }, ( _, i ) => ( {
        id: i,
        left: 50 + Math.cos( ( i / 16 ) * Math.PI * 2 ) * ( 18 + ( i % 3 ) * 4 ),
        top: 50 + Math.sin( ( i / 16 ) * Math.PI * 2 ) * ( 18 + ( i % 4 ) * 5 ),
        delay: i * 0.06,
        size: 4 + ( i % 4 )
    } ) );
</script>

{#if active}
    <div class="pointer-events-none absolute inset-0 overflow-visible">
        {#each particles as particle ( particle.id )}
            <span
                class={`sparkle absolute rounded-full motion-safe:animate-sparkle ${ theme === "light" ? "bg-fuchsia-400/80" : "bg-violet-300/90" }`}
                style={`left:${ particle.left }%;
                   top:${ particle.top }%;
                   width:${ particle.size }px;
                   height:${ particle.size }px;
                   animation-delay:${ particle.delay }s;`}
            ></span>
        {/each}
    </div>
{/if}

<style>
    .sparkle {
        filter: blur(0.4px);
        box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
        animation: sparkle-pop 1.4s ease-in-out infinite, sparkle-drift 1.4s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
        .sparkle {
            animation: none;
        }
    }

    @keyframes sparkle-pop {
        0% {
            opacity: 0;
            transform: scale(0.2);
        }
        30% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.3);
        }
    }

    @keyframes sparkle-drift {
        0% {
            translate: 0 0;
        }
        50% {
            translate: 0 -10px;
        }
        100% {
            translate: 0 -18px;
        }
    }
</style>
