<script lang="ts">
    import type { Theme } from "$lib/types/theme";
    import LogoLight from "$lib/assets/logo/light.png";
    import LogoDark from "$lib/assets/logo/dark.png";

    let { theme = "light" as Theme } = $props();
</script>

<img src={theme === "light" ? LogoLight : LogoDark} alt="Logo Magic Answer" draggable="false" />

<style>
    img {
        width: 56px;
        height: 56px;
        object-fit: contain;
        border-radius: 20px;
        display: block;
    }
</style>
