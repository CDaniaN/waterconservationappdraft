<script>
</script>

<svelte:head>
  <title>Welcome Page</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <div class="content">
    <!--I think can change name "content" -->
    <div class="text">
      <!--I think can change name "text" -->
      <h1>Save Water <br /> <span>Conserve Water</span></h1>
      <!-- Change words -->
      <p>
        Water is an important source in our world. The water usage tracker app
        gives a way for the users to track their water usage in order to promote
        environmentally conscious behaviors. When it comes to how to aid in
        helping the environment, people can feel overwhelmed and not know where
        to start. This website can provide the beginning steps in order for the
        user to start taking action to increase sustainability.
      </p>
      <!--Add more later -->
    </div>
  </div>

  <div class="water">
    <img src="/pepsi.png" alt="" />
    <!--If we want image in middle of page-->
  </div>
</div>

<style>
  .content {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
  }

  .content .text {
    position: relative;
    max-width: 600px;
  }

  .content .text h1 {
    text-transform: uppercase;
    font-weight: 800;
    color: black;
    line-height: 1.5em; /*should change*/
    letter-spacing: 0.1em; /*might be able to change*/
    margin-top: 80px;
    font-size: 40px;
  }

  .content .text h1 span {
    font-size: 50px;
  }

  .content .text p {
    color: black;
    font-size: 17px;
    font-weight: 600;
    margin-top: 40px;
    letter-spacing: 0.1em;
  }

  .text {
    position: absolute;
    max-width: 430px;
    width: 100%;
    padding: 30px;
    border-radius: 3px;
    background: #f9f8f6;
    opacity: 0.6;
  }
</style>
