<section class="form">
<div>
  <div class="form water-usage-form">
    <div class="form-content">
      <!-- Data input page -->
      <header>Data Input</header>
      <form action="#">
        <!-- shower time input field -->
        <label for="shower-time">Shower time (minutes):</label>
        <div class="field input-field">
          <input
            type="number"
            placeholder="How long did you take a shower for?"
            name="shower-time"
            class="input"
          />
        </div>

        <!-- gardening time input field -->
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

        <!-- dishes time input field -->
        <label for="dishes-time">Washing Dishes time (minutes):</label>
        <div class="field input-field">
          <input
            type="number"
            placeholder="How long did you wash the dishes for?"
            name="dishes-time"
            class="input"
          />
        </div>

        <!-- brushing teeth time input field -->
        <label for="Teeth-time">Brushing Teeth time (minutes):</label>
        <div class="field input-field">
          <input
            type="number"
            placeholder="How long did you brush your teeth for?"
            name="Teeth-time"
            class="input"
          />
        </div>

        <!-- submit button -->
        <button class="button" type="submit">Submit</button>
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

.form{
    display: flex;
    justify-content: center;
    max-width: 430px;
    width: 100%;
    padding: 30px;
    border-radius: 1px;
    background: #F9F8F6;
    opacity: 0.95;
    margin: 16px;
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
    padding: 0 20px;
    border: 1px solid #dddddd;
}

.field input:focus{
    border-bottom-width: 4px;
}

.button {
    padding: 8px;
    background-color: #00ace5;
    color: white;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    transition: background-color 100ms ease-in-out;
  }

  .button:hover {
    background-color: #006d8f;
  }
 </style>
