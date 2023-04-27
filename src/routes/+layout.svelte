<script>
  import Header from "$lib/components/Header.svelte";
</script>

<div class="app container">
  <Header />
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
