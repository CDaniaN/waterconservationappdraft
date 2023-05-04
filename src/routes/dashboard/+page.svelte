<script>
  import { enhance } from "$app/forms";
  import { onMount } from "svelte";
  import { Chart } from "chart.js/auto";

  export let data;
  export let form;

  let { profile } = data;
  let chart;

  let profileForm;
  let loading = false;
  let showerTime = profile?.showerTime;
  let gardenTime = profile?.gardenTime;
  let dishTime = profile?.dishTime;
  let teethTime = profile?.teethTime;

  const handleSubmit = () => {
    loading = true;
    return async () => {
      loading = false;
      document.getElementById("myForm").reset();
    };
  };

  onMount(() => {
    new Chart(chart, {
      type: "pie",
      data: {
        labels: ["Shower", "Garden", "Dishes", "Teeth"],
        datasets: [
          {
            data: [showerTime, gardenTime, dishTime, teethTime],
            backgroundColor: ["#325874", "#6897bb", "#a6cee3", "#e8f3ff"],
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Current Water Usages",
        },
      },
    });
  });
</script>

<section class="dash">
  <div class="form">
    <header>Data Input</header>
    <p> Refresh page to show pie chart!</p>
    <form
      id="myForm"
      method="post"
      action="?/update"
      use:enhance={handleSubmit}
      bind:this={profileForm}
    >
      <label for="showerTime">Shower time ({showerTime} gallons):</label>
      <input
        type="number"
        placeholder="How long did you take a shower for?"
        name="showerTime"
        class="input"
      />

      <label for="gardenTime">Water Gardening time ({gardenTime} gallons):</label>
      <input
        type="number"
        placeholder="How long did you water the garden?"
        name="gardenTime"
        class="input"
      />

      <label for="dishTime">Washing Dishes time ({dishTime} gallons):</label>
      <input
        type="number"
        placeholder="How long did you wash the dishes for?"
        name="dishTime"
        class="input"
      />

      <label for="teethTime">Brushing Teeth time ({teethTime} gallons):</label>
      <input
        type="number"
        placeholder="How long did you brush your teeth for?"
        name="teethTime"
        class="input"
      />

      <button
        class="button"
        type="submit"
        value={loading ? "Loading..." : "Update"}
        disabled={loading}
      >
        Submit
      </button>
    </form>
  </div>

  <div class="pie"><canvas bind:this={chart} /></div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2family=Golos+Text:wght@400;500;600&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Golos Text", sans-serif;
  }

  .dash {
    display: flex;
    gap: 32px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 430px;
    width: 100%;
    border-radius: 8px;
    background: #f9f8f6;
    opacity: 0.95;
    padding: 32px;
    margin: 16px;
    gap: 16px;
  }
  
  .form p {
    color: rgb(56, 61, 68);
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  .form-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 8px;
  }

  header {
    font-size: 28px;
    font-weight: 600;
    color: #232836;
    text-align: center;
  }

  label {
    font-size: 20px;
    font-weight: 400;
    color: #345e7d;
    text-align: center;
  }

  .input {
    padding: 0 20px;
    border: 1px solid #dddddd;
    position: relative;
    height: 50px;
    width: 100%;
    border-radius: 6px;
  }

  .input:focus {
    border-bottom-width: 4px;
  }

  .button {
    padding: 8px;
    background-color: #00ace5;
    color: white;
    border: none;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    transition: background-color 100ms ease-in-out;
  }

  .button:hover {
    background-color: #006d8f;
  }

  .pie {
    width: 500px;
    height: 500px;
  }
</style>
