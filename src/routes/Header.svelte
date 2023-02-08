<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/debug' ? 'page' : undefined}>
				<a href="/debug">Debug</a>
            </li>
		</ul>
	</nav>
</header>

<style>
ul li {
    display:inline;
}

a {
	margin: 2px 2px 2px 10px;
}
</style>
