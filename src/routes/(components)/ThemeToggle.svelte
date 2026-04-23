<script lang="ts">
    import { Moon, Sun } from "@lucide/svelte";

    let { theme, onToggle } = $props();
</script>

<button
    type="button"
    class="relative flex h-8 w-16 items-center overflow-hidden rounded-full px-1 border cursor-pointer motion-safe:transition"
    onclick={onToggle}
    aria-label="Basculer le thème de couleurs"
    aria-pressed={theme === "dark"}
    class:bg-[#E9E7F2]={theme === "light"}
    class:border-[#E5E7EB]={theme === "light"}
    class:motion-safe:hover:shadow-md={theme === "light"}
    class:bg-[#4D3076]={theme === "dark"}
    class:border-transparent={theme === "dark"}
    class:hover:bg-[#5a3a87]={theme === "dark"}
>
    <div
        class="pointer-events-none absolute inset-0"
        class:hidden={theme === "dark"}
    >
        <div class="absolute bottom-0 left-3 h-3 w-6 rounded-full bg-white/60 blur-[1px]"></div>
        <div class="absolute bottom-0 left-6 h-2 w-4 rounded-full bg-white/50 blur-[1px]"></div>
        <div class="absolute bottom-0 left-9 h-3 w-6 rounded-full bg-white/60 blur-[1px]"></div>
    </div>

    <div
        class="pointer-events-none absolute inset-0"
        class:hidden={theme === "light"}
    >
        <div class="absolute left-2 top-2 size-0.5 rounded-full bg-white/60"></div>
        <div class="absolute left-6 top-1.75 size-0.5 rounded-full bg-white/50"></div>
        <div class="absolute left-10 top-2.5 size-0.5 rounded-full bg-white/60"></div>
    </div>

    <div
        class="flex size-6 items-center justify-center rounded-full shadow-sm motion-safe:transition-transform duration-300"
        class:translate-x-0={theme === "light"}
        class:translate-x-8={theme === "dark"}
        class:bg-[#F59E0B]={theme === "light"}
        class:bg-[#E5E7EB]={theme === "dark"}
    >
        {#if theme === "light"}
            <Sun class="size-4 text-[#7C2D12]" />
        {:else}
            <Moon class="size-4 text-[#4B5563]" />
        {/if}
    </div>
</button>
