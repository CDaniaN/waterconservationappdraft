<section class="form">
<div>
  <div class="form water-usage-form">
    <div class="form-content">
      <!-- Log in page -->
      <header>Data Input</header>
      <form action="#">
        <!-- password input field -->
        <label for="shower-time">Shower time (minutes):</label>
        <div class="field input-field">
          <input
            type="number"
            placeholder="How long did you take a shower for?"
            name="shower-time"
            class="input"
          />
        </div>

        <!-- retype password input field -->
        <label for="garden-watering-time">Water Gardening time (minutes):</label
        >
        <div class="field input-field">
          <input
            type="number"
            placeholder="How long did you water the garden?"
            name="garden-watering-time"
            class="input"
          />
        </div>

        <label for="dishes-time">Washing Dishes time (minutes):</label>
        <div class="field input-field">
          <input
            type="number"
            placeholder="How long did you wash the dishes for?"
            name="dishes-time"
            class="input"
          />
        </div>

        <label for="Teeth-time">Brushing Teeth time (minutes):</label>
        <div class="field input-field">
          <input
            type="number"
            placeholder="How long did you brush your teeth for?"
            name="Teeth-time"
            class="input"
          />
        </div>

        <!-- submits and brings you back to log in page , give this a a class and style -->
        <button class="submit" type="submit">Submit</button>
      </form>
    </div>
  </div>
</section>

<style>
@import url('https://fonts.googleapis.com/css2family=Golos+Text:wght@400;500;600&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Golos Text', sans-serif;
}

.container{
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    background-color: #caf0fe;
    background-image: url("water.jpeg");
}

.form{
    position: absolute;
    max-width: 430px;
    width: 100%;
    padding: 30px;
    border-radius: 1px;
    background: #F9F8F6;
    opacity: 0.95;
}

header{
    font-size: 28px;
    font-weight: 600;
    color: #232836;
    text-align: center;
    margin-bottom: 2rem;
}

label
{
    font-size: 20px;
    font-weight: 400;
    color: #345e7d;
    text-align: center;
    margin-bottom: 0.2rem;
    margin-top: 2rem;
}

form{
    margin-top: 30px;
}

.form .field{
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 20px;
    border-radius: 6px;
}

.field input,
.field button{
    height: 50px;
    width: 100%;
    border: none;
    display: block;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    border-radius: 6px;
    background: #eeeeee;
    transition: background 0.2s, border-color 0.5s;
}
.field input{
    padding: 0 15px;
    border: 1px solid #dddddd;
}

.field input:focus{
    border-bottom-width: 2px;
}


.field button{
    color: #fff;
    background-color: #006d8f;
    transition: all 0.4s ease;
    cursor: pointer;
    width: 99%;
    font-weight: bold;
    outline: none;
}

.field button:hover{
    background-color: #00ace5;
}
 </style>