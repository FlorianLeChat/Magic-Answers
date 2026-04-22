<script lang="ts">
    import { Code } from "@lucide/svelte";
    import LogoLight from "$lib/assets/logo/light.png";
    import LogoDark from "$lib/assets/logo/dark.png";
    import type { Theme } from "$lib/types/theme";
    import MagicCard from "./(components)/MagicCard.svelte";
    import MagicInput from "./(components)/MagicInput.svelte";
    import MagicSparkles from "./(components)/MagicSparkles.svelte";
    import ThemeToggle from "./(components)/ThemeToggle.svelte";

    import { MAGIC_ANSWERS, EASTER_EGG_KEYWORDS, REVEAL_VARIANTS, type RevealVariant } from "$lib/data/magic-answers";

    type Status = "idle" | "generating" | "revealed";

    let theme = $state<Theme>( "light" );
    let question = $state( "" );
    let answer = $state( "" );
    let status = $state<Status>( "idle" );
    let revealVariant = $state<RevealVariant>( "fade" );
    let isEasterEgg = $state( false );

    const randomItem = <T>( items: readonly T[] ): T =>
    {
        return items[ Math.floor( Math.random() * items.length ) ];
    };

    const toggleTheme = () =>
    {
        theme = theme === "light" ? "dark" : "light";
    };

    const shouldTriggerEasterEgg = ( input: string ) =>
    {
        const normalized = input.toLowerCase();

        return EASTER_EGG_KEYWORDS.some( ( k ) => normalized.includes( k ) ) || Math.random() < 0.08;
    };

    const askMagic = () =>
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
    };
</script>

<div
    class={`min-h-screen flex flex-col px-6 py-6 ${
        theme === "light"
            ? "bg-[linear-gradient(110deg,#F7F5FF_0%,#F9E4F6_50%,#F6F6FC_100%)] text-zinc-900"
            : "bg-[linear-gradient(110deg,#03061B_0%,#3A0363_70%,#260D41_100%)] text-white"
    }`}
>
    <header class="flex items-center gap-5">
        <a
            class={`size-9 flex items-center justify-center rounded-full motion-safe:transition ${
                theme === "light"
                    ? "bg-[#FBFBFD] border border-[#E5E7EB] text-[#666] hover:text-[#333] motion-safe:hover:shadow-md"
                    : "bg-[#4D3076] text-white hover:bg-[#5a3a87]"
            }`}
            rel="noopener noreferrer"
            href="https://github.com/FlorianLeChat/Magic-Answers"
            target="_blank"
            aria-label="GitHub"
        >
            <Code />
        </a>

        <ThemeToggle {theme} onToggle={toggleTheme} />
    </header>

    <main class="flex flex-1 flex-col items-center justify-center text-center">
        <img
            src={theme === "light" ? LogoLight : LogoDark}
            alt="Logo Magic Answer"
            class="w-21 h-21 object-contain rounded-[20px] block"
            draggable="false"
        />

        <h1 class="mt-10 text-[2.5rem] font-semibold">Magic Answer</h1>

        <p class="mt-4 text-[0.95rem] opacity-75">Demandez n’importe quoi ! Magic Answer y répondra.</p>

        <div class="relative mt-12 w-full max-w-145">
            <MagicInput bind:value={question} {theme} disabled={status === "generating"} onSubmit={askMagic} />

            <MagicSparkles active={status === "generating"} {theme} />
        </div>

        {#if status !== "idle"}
            <MagicCard
                {theme}
                {answer}
                visible={status === "revealed"}
                variant={revealVariant}
                easterEgg={isEasterEgg}
            />
        {/if}
    </main>

    <footer class="w-full pt-4 text-right text-[12px] leading-snug">
        Made with 💗
        <br />
        By
        <a
            class="underline decoration-dotted underline-offset-2"
            href="https://www.linkedin.com/in/claire-math%C3%A9-ux-ui-designer-%E2%9C%AE/"
            target="_blank"
        >
            Claire
        </a>
        and
        <a
            class="underline decoration-dotted underline-offset-2"
            href="https://www.linkedin.com/in/florian-trayon/"
            target="_blank"
        >
            Florian
        </a>
    </footer>
</div>
