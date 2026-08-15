<script lang="ts">
    import { Moon, Sun } from "@lucide/svelte";
    import * as m from "$lib/locales/messages.js";
    import type { Theme } from "$lib/types/Theme";

    let { theme, onToggle }: { theme: Theme; onToggle: () => void } = $props();
</script>

<button
    type="button"
    class="relative flex h-8 w-16 items-center overflow-hidden rounded-full px-1 border
        motion-safe:transition-colors motion-safe:duration-200 motion-reduce:transition-none
        bg-[#E9E7F2] border-[#E5E7EB] motion-safe:hover:shadow-md
        dark:bg-[#4D3076] dark:border-transparent dark:motion-safe:hover:shadow-none dark:motion-safe:hover:bg-[#5a3a87]"
    onclick={onToggle}
    aria-label={m.theme_toggle_aria_label()}
    aria-pressed={theme === "dark"}
>
    <div class="pointer-events-none absolute inset-0 dark:hidden">
        <div class="absolute bottom-0 left-3 h-3 w-6 rounded-full bg-white/60 blur-[1px]"></div>
        <div class="absolute bottom-0 left-6 h-2 w-4 rounded-full bg-white/50 blur-[1px]"></div>
        <div class="absolute bottom-0 left-9 h-3 w-6 rounded-full bg-white/60 blur-[1px]"></div>
    </div>

    <div class="pointer-events-none absolute inset-0 hidden dark:block">
        <div class="absolute left-2 top-2 size-0.5 rounded-full bg-white/60"></div>
        <div class="absolute left-6 top-1.75 size-0.5 rounded-full bg-white/50"></div>
        <div class="absolute left-10 top-2.5 size-0.5 rounded-full bg-white/60"></div>
    </div>

    <div
        class="flex size-6 items-center justify-center rounded-full shadow-sm
            motion-safe:transition-transform motion-safe:duration-300
            motion-reduce:transition-none motion-reduce:shadow-none
            motion-safe:translate-x-0 dark:motion-safe:translate-x-8
            motion-reduce:translate-x-0 dark:motion-reduce:translate-x-8
            bg-[#F59E0B] dark:bg-[#E5E7EB]"
    >
        <Sun class="size-4 text-[#7C2D12] dark:hidden" />
        <Moon class="size-4 text-[#4B5563] hidden dark:block" />
    </div>
</button>
