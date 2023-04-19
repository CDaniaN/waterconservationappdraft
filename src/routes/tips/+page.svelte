<section class=" forms">
  <div class="form tips">
    <div class="form content">
      <!-- Tips page -->
      <div class="header">
        <h1>Tips</h1>
      </div>

      <form action="#">
        <div class="left">
          <div class="text">
            <h1>1. USE LESS WATER WHEN BRUSHING YOUR TEETH AND SHOWERING</h1>
            <p>
              An easy way to start saving water is to be mindful of turning your
              water off when brushing teeth, instead of keeping it running.
              Similarly, turning the shower off when washing your hair or
              shaving.
            </p>

            <hr />

            <h1>2. TAKE SHORTER SHOWERS</h1>
            <p>
              Showers can take up to 10 galons of water per minute. Reducing
              shower time can make a big difference in an effort to reduce your
              water usage.
            </p>
          </div>
        </div>

        <div class="right">
          <div class="text">
            <h1>3. CHECK PIPES FOR LEAKS</h1>
            <p>
              Water leaks can waste up to 50 gallons or more of unused water.
            </p>

            <hr />

            <h1>4. DON'T OVER WATER YOUR GARDEN</h1>
            <p>
              Most people dont know exactly how much water their garden needs,
              so they tend to over water. Educate yourself on how much water
              your garden actually needs.
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

<style>
  .header /*the navigation bar*/
  {
    padding: 30px;
    font-size: 50px;
    text-align: center;
  }

  .container {
    width: 100%;
    background-color: lightblue;
    opacity: 0.95;
    position: relative;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .content .text h1 {
    text-transform: uppercase;
    font-weight: 800;
    color: black;
    line-height: 1.5em; /*should change*/
    letter-spacing: 0.1em; /*might be able to change*/
    font-size: 40px;
  }

  .content .text p {
    color: black;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 0.1em;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    padding: 32px;
  }

  .left, .right {
    padding: 32px;
    width: 50%;
    align-items: center;
    background: #f9f8f6;
    opacity: 0.6;
  }
</style>
