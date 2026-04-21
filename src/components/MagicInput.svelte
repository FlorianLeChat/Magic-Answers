<script lang="ts">
    import { Dices } from "@lucide/svelte";
    import type { Theme } from "../types/theme";

    let {
        value = $bindable( "" ),
        theme = "light" as Theme,
        disabled = false,
        onSubmit = () => { /* empty */ }
    } = $props();

    function handleSubmit()
    {
        if ( !disabled )
        {
            onSubmit();
        }
    }

    function handleKeydown( event: KeyboardEvent )
    {
        if ( event.key === "Enter" )
        {
            event.preventDefault();
            handleSubmit();
        }
    }
</script>

<div class="relative w-full max-w-145">
    <input
        bind:value
        type="text"
        placeholder="Poser une question"
        class={`h-14 w-full rounded-2xl border pl-5 pr-16 text-sm outline-none transition ${
            theme === "light"
                ? "border-white/70 bg-white/80 text-zinc-800 shadow-[0_12px_40px_rgba(150,120,170,0.18)] placeholder:text-zinc-500"
                : "border-violet-300/35 bg-violet-950/25 text-white shadow-[0_0_28px_rgba(139,92,246,0.32)] placeholder:text-white/70"
        } ${ disabled ? "cursor-not-allowed opacity-80" : "" }`}
        onkeydown={handleKeydown}
        {disabled}
    />

    <button
        type="button"
        onclick={handleSubmit}
        disabled={disabled}
        aria-label="Lancer la magie"
        class={`absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-xl transition ${
            theme === "light"
                ? "bg-fuchsia-200 text-zinc-700 hover:bg-fuchsia-300"
                : "bg-zinc-900/80 text-white hover:bg-zinc-900"
        } ${ disabled ? "cursor-not-allowed opacity-60" : "" }`}
    >
        <Dices class="size-4.5" />
    </button>
</div>
