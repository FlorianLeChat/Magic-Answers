<script lang="ts">
    import { Moon, Sun } from "@lucide/svelte";
    import type { Theme } from "../types/theme";

    let {
        theme = "light" as Theme,
        onToggle
    }: {
        theme?: Theme;
        onToggle: () => void;
    } = $props();
</script>

<div class="flex items-center gap-3">
    <button
        type="button"
        onclick={onToggle}
        aria-label="Basculer le thème"
        aria-pressed={theme === "dark"}
        class={`relative flex h-8 w-16 items-center rounded-full px-1 transition ${
            theme === "light"
                ? "bg-white/70 ring-1 ring-black/8"
                : "bg-slate-700/70 ring-1 ring-white/10"
        }`}
    >
        <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            {#if theme === "dark"}
                <div class="absolute left-2 top-2 size-1 rounded-full bg-white/50"></div>
                <div class="absolute left-6 top-1.5 size-0.5 rounded-full bg-white/60"></div>
                <div class="absolute left-9 top-3 size-0.5 rounded-full bg-white/50"></div>
            {/if}
        </div>

        <div
            class={`flex size-6 items-center justify-center rounded-full shadow transition-transform duration-300 ${
                theme === "light"
                    ? "translate-x-0 bg-orange-400 text-orange-950"
                    : "translate-x-8 bg-zinc-200 text-zinc-700"
            }`}
        >
            {#if theme === "light"}
                <Sun class="size-4" />
            {:else}
                <Moon class="size-4" />
            {/if}
        </div>
    </button>
</div>
