<!-- src/routes/logging-in/+page.svelte -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data
	$: {
		const redirectTo = $page.url.searchParams.get('redirect');

		// check if user has been set in session store then redirect
		if (browser && data.session) {
			goto(redirectTo ?? '/dashboard');
		}
	}
</script>

<section>
	All the water that will ever be is, right now.” – National Geographic
</section>