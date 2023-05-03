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
    box-sizing: border-box; 
    font-family: "Poppins", sans-serif; 
  }

  :global(.container) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh; 
    width: 100%;
    background-color: lightblue;
    background-image: url("$lib/images/water2.jpeg"); 
    background-position: center;
    background-size: cover;
    padding-right: 3%;
    padding-left: 5%;
    box-sizing: border-box;
    position: relative;
  }
</style>
