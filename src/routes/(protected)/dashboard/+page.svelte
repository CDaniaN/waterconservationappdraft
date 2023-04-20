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

.submit {
    padding: 8px;
    background-color: #00ace5;
    color: white;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    transition: background-color 100ms ease-in-out;
  }

.submit:hover {
    background-color: #006d8f;
}

.form-content
{
    background: #f9f8f6;
    opacity: 0.9;
}


 </style>