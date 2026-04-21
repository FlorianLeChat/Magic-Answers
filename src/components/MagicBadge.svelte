<script lang="ts">
    import { Sparkles } from "@lucide/svelte";

    type Theme = "light" | "dark";

    let { theme = "light" as Theme } = $props();
</script>

<div
    class={`grid size-14 place-items-center rounded-2xl shadow-md ${
        theme === "light" ? "bg-rose-300/90" : "bg-rose-300/95"
    }`}
>
    <Sparkles class={`size-7 ${ theme === "light" ? "text-violet-800" : "text-violet-900" }`} />
</div>
