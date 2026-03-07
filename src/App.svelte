<script>
	import { Github } from "@lucide/svelte";
</script>

<header>
	<a
		rel="noopener noreferrer"
		href="https://github.com/FlorianLeChat/Magic-Answers"
		title="GitHub"
		target="_blank"
		aria-label="GitHub"
	>
		<Github />
	</a>
</header>

<footer>
	Made with 💗
	<br />
	By
	<a rel="noopener noreferrer" href="https://www.linkedin.com/in/claire-math%C3%A9-ux-ui-designer-%E2%9C%AE/" target="_blank">Claire</a>
	and
	<a rel="noopener noreferrer" href="https://www.linkedin.com/in/florian-trayon/" target="_blank">Florian</a>
</footer>

<style>
	header a {
		/* Bouton vers le dépôt GitHub */
		width: 2.5rem;
		color: #666666;
		height: 2.5rem;
		border: 1px solid #E5E7EB;
		display: flex;
		align-items: center;
		border-radius: 1.25rem;
		justify-content: center;
		background-color: #FBFBFD;

		&:hover {
			color: #333333;
			box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
			transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}
	}

	footer {
		/* Crédits */
		width: 100%;
		padding: 1rem 0 1rem 0;
		font-size: 12px;
		text-align: right;
		font-weight: 400;
		line-height: 1.3;

		a {
			/* Liens vers les profils LinkedIn */
			text-decoration: dotted underline 1px;
			text-underline-offset: 2px;
		}
	}
</style>