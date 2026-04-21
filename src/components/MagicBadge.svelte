<script lang="ts">
    import type { Theme } from "../types/theme";

    let { theme = "light" as Theme } = $props();

    const logo = $derived( theme === "light" ? "/assets/logo/light.png" : "/assets/logo/dark.png" );
</script>

<img
    src={logo}
    alt="Logo Magic Answers"
    draggable="false"
/>

<style>
    img {
        width: 56px;
        height: 56px;
        object-fit: contain;
        border-radius: 20px;
        display: block;
    }
</style>
