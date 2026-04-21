<script lang="ts">
    import { Github } from "@lucide/svelte";
    import MagicBadge from "./components/MagicBadge.svelte";
    import MagicCard from "./components/MagicCard.svelte";
    import MagicInput from "./components/MagicInput.svelte";
    import MagicSparkles from "./components/MagicSparkles.svelte";
    import ThemeToggle from "./components/ThemeToggle.svelte";
    import type { Theme } from "./types/theme";
    import { MAGIC_ANSWERS, EASTER_EGG_KEYWORDS, REVEAL_VARIANTS, type RevealVariant } from "./data/magic-answers";

    type Status = "idle" | "generating" | "revealed";

    let theme = $state<Theme>( "light" );
    let question = $state( "" );
    let answer = $state( "" );
    let status = $state<Status>( "idle" );
    let revealVariant = $state<RevealVariant>( "fade" );
    let isEasterEgg = $state( false );

    function randomItem<T>( items: readonly T[] ): T
    {
        return items[ Math.floor( Math.random() * items.length ) ];
    }

    function toggleTheme()
    {
        theme = theme === "light" ? "dark" : "light";
        localStorage.setItem( "magic-theme", theme );
    }

    function shouldTriggerEasterEgg( input: string )
    {
        const normalized = input.toLowerCase();
        const containsKeyword = EASTER_EGG_KEYWORDS.some( ( k ) =>
            normalized.includes( k )
        );

        return containsKeyword || Math.random() < 0.08;
    }

    function askMagic()
    {
        if ( !question.trim() || status === "generating" ) return;

        status = "generating";

        revealVariant = randomItem( REVEAL_VARIANTS );

        const nextAnswer = randomItem( MAGIC_ANSWERS );
        const easter = shouldTriggerEasterEgg( question );

        const delay = 1400 + Math.random() * 700;

        setTimeout( () =>
        {
            answer = nextAnswer;
            isEasterEgg = easter;
            status = "revealed";
        }, delay );
    }
</script>

<div class={`page ${ theme === "light" ? "light-bg text-zinc-900" : "dark-bg text-white" }`}>
    <header class="flex justify-items-start gap-3">
        <a
            class={`github ${ theme }`}
            rel="noopener noreferrer"
            href="https://github.com/FlorianLeChat/Magic-Answers"
            title="GitHub"
            target="_blank"
            aria-label="GitHub"
        >
            <Github />
        </a>

        <ThemeToggle {theme} onToggle={toggleTheme} />
    </header>

    <main>
        <MagicBadge {theme} />

        <h1>Magic Answer</h1>

        <p class="subtitle">
            Demandez n’importe quoi ! Magic Answer y répondra.
        </p>

        <div class="input-wrapper">
            <MagicInput
                bind:value={question}
                {theme}
                disabled={status === "generating"}
                onSubmit={askMagic}
            />

            <MagicSparkles
                active={status === "generating"}
                {theme}
            />
        </div>

        {#if status !== "idle"}
            <MagicCard
                visible={status === "revealed"}
                answer={answer}
                variant={revealVariant}
                easterEgg={isEasterEgg}
                {theme}
            />
        {/if}
    </main>

    <footer>
        Made with 💗
        <br />
        By
        <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/claire-math%C3%A9-ux-ui-designer-%E2%9C%AE/"
            target="_blank"
        >Claire</a
        >
        and
        <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/florian-trayon/"
            target="_blank"
        >Florian</a
        >
    </footer>
</div>

<style>
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
    }

    .light-bg {
        background: linear-gradient(90deg, #f0eef2 0%, #f4e7f0 100%);
    }

    .dark-bg {
        background: linear-gradient(
            110deg,
            #05072f 0%,
            #1b0045 38%,
            #5f0099 100%
        );
    }

    header a {
        width: 2.5rem;
        color: #666666;
        height: 2.5rem;
        border: 1px solid #e5e7eb;
        display: flex;
        align-items: center;
        border-radius: 1.25rem;
        justify-content: center;
        background-color: #fbfbfd;

        &:hover {
            color: #333333;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;

            @media (prefers-reduced-motion: reduce) {
                transition: none;
            }
        }
    }

    footer {
        width: 100%;
        padding: 1rem 0;
        font-size: 12px;
        text-align: right;
        line-height: 1.3;

        a {
            text-decoration: dotted underline 1px;
            text-underline-offset: 2px;
        }
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    h1 {
        font-size: 2.5rem;
        margin-top: 1.25rem;
        font-weight: 600;
    }

    .subtitle {
        margin-top: 0.5rem;
        font-size: 0.95rem;
        opacity: 0.75;
    }

    .input-wrapper {
        position: relative;
        margin-top: 2rem;
    }

    .github {
        width: 2.5rem;
        height: 2.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 999px;

        transition:
            background 0.2s ease,
            color 0.2s ease,
            box-shadow 0.2s ease;
    }

    .github.light {
        background: #fbfbfd;
        border: 1px solid #e5e7eb;
        color: #666666;
    }

    .github.light:hover {
        color: #333333;
        box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -2px rgba(0, 0, 0, 0.1);
    }

    .github.dark {
        background: #4D3076;
        color: white;
        border: none;
    }

    .github.dark:hover {
        background: #5a3a87;
    }
</style>
