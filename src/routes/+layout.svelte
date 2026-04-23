<script lang="ts">
    import "../app.css";
    import { asset } from "$app/paths";

    let { children } = $props();
</script>

<svelte:head>
    <link
        rel="icon"
        href={asset( "/assets/favicons/light.png" )}
        type="image/png"
        sizes="1024x1024"
        media="(prefers-color-scheme: light)"
    />

    <link
        rel="icon"
        href={asset( "/assets/favicons/dark.png" )}
        type="image/png"
        sizes="1024x1024"
        media="(prefers-color-scheme: dark)"
    />

    <link rel="manifest" href={asset( "/manifest.webmanifest" )} crossorigin="use-credentials" />
</svelte:head>

{@render children()}
