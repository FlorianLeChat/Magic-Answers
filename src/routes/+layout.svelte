<script lang="ts">
    import "../app.css";
    import { env } from "$env/dynamic/public";
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

    {#if env.PUBLIC_ANALYTICS_ENABLED === "true"}
        <script
            src={env.PUBLIC_ANALYTICS_ENDPOINT}
            defer
            data-website-id={env.PUBLIC_ANALYTICS_PROJECT_ID}
            data-performance="true"
            data-do-not-track={env.PUBLIC_ANALYTICS_RESPECT_DNT}
            data-exclude-hash="true"
            data-exclude-search="true"
        ></script>
    {/if}
</svelte:head>

{@render children()}
