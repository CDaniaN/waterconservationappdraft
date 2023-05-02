<script>
  import Header from "$lib/components/Header.svelte";
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data

	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<div class="app container">
  <Header data={data} />
  <slot />
</div>



<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /*Might delete this*/
    font-family: "Poppins", sans-serif; /*might change font*/
  }

  :global(.container) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh; /*what is vh?*/ /* viewport height - mike */
    width: 100%;
    background-color: lightblue;
    background-image: url("$lib/images/water2.jpeg"); /*have to change background image*/
    /*might not need from below + depends on our image*/
    background-position: center;
    background-size: cover;
    padding-right: 3%;
    padding-left: 5%;
    box-sizing: border-box;
    position: relative;
  }
</style>
