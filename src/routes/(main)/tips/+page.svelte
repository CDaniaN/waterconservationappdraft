<section class="container forms">
  <div class="form tips">
    <div class="form-content">

      <!-- Tips page -->
      <div class="header">
          <h1>Tips</h1>
      </div>
        
      <form action="#">

          <div class="left">
              <div class="text">
                  <h1>1. USE LESS WATER WHEN BRUSHING YOUR TEETH/SHOWERING </h1> 
                  <p> 
                      An easy way to start saving water is to be mindful of turning your water off when brushing teeth, 
                      instead of keeping it running. Similarly, turning the shower off when washing your hair or shaving.
                  </p>

                  <p> 
                    --------------------------------------------------------------------                                                                               
                  </p>

                  <h1>2. TAKE SHORTER SHOWERS  </h1> 
                  <p> 
                      Showers can take up to 10 galons of water per minute. Reducing shower time can make a 
                      big difference in an effort to reduce your water usage.

                  </p>

              </div>
          </div>


          <div class="right">
              <div class="text">
                  <h1>3. CHECK PIPES FOR LEAKS </h1> 
                  <p> 
                      Water leaks can waste up to 50 gallons or more of unused water.
                  </p>

                  <p> 
                      --------------------------------------------------------------------                                                                               
                  </p>

                  <h1>4. DON'T OVER WATER YOUR GARDEN </h1> 
                  <p> 
                      Most people dont know exactly how much water their garden needs, so they tend to over water.
                      Educate yourself on how much water your garden actually needs. 
                  </p>


              </div>
          </div>
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
   .container 
  {
    height: 100vh; /*what is vh?*/
    width: 100%;
    background-color: lightblue;
    background-image: url("water2.jpeg");
    opacity: 0.95;
    background-position: center;
    background-size: cover; 
    padding-right: 5%;
    padding-left: 10%;
    box-sizing: border-box;
    position: relative;
  }
  
  .text{
    position: absolute;
    max-width: 430px;
    width: 100%;
    padding: 30px;
    border-radius: 3px;
    background: #F9F8F6;
    opacity: 0.60;
  }
 
  .content 
  {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
  }
  
  .content .text
  {
    position: relative;
    max-width: 600px;
  }
  
  .content .text h1
  {
    text-transform: uppercase;
    font-weight: 800;
    color: black;
    line-height: 1.5em; /*should change*/
    letter-spacing: .1em; /*might be able to change*/
    margin-top: 80px;
    font-size: 40px;
  }
  
  .content .text h1 span
  {
    font-size: 50px;
  }
  
  .content .text p
  {
    color: black;
    font-size: 17px;
    font-weight: 600;
    margin-top: 40px;
    letter-spacing: .1em;
  }

  .left{
    float: left;
    width: 50%;
    align-items: center;
  }

  .right{
    float: right;
    width: 50%;
    align-items: center;
  }
 
</style>