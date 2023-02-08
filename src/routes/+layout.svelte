<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	
	import {onMount} from "svelte";
	onMount(() => {
		
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit to learn SvelteKit</p>
	</footer>
</div>

<style>

</style>
