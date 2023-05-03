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
          <button class="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </section>
  
  

  
  <script>
   
    const supabaseUrl = "https://hfykhzgxnoopbcsdmaph.supabase.co/";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmeWtoemd4bm9vcGJjc2RtYXBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3MTYxMzUsImV4cCI6MTk5MzI5MjEzNX0.1gqfN0SpN2p7aRZ_33Ld1stVj2gQGkiIhC0y07tULlg";
  
    const supabase = createClient(supabaseUrl, supabaseKey);
  
    const waterUsageForm = document.querySelector('.water-usage-form form');
  
    waterUsageForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const showerTime = parseInt(document.getElementById('shower-time').value, 10);
      const gardenTime = parseInt(document.getElementById('garden-watering-time').value, 10);
      const dishesTime = parseInt(document.getElementById('dishes-time').value, 10);
      const teethTime = parseInt(document.getElementById('Teeth-time').value, 10);
  
      const showerUsage1 = showerTime * 5; // Assumes 5 gallons of water per minute for showering
      const gardenUsage1 = gardenTime * 13; // Assumes 13 gallons of water per minute for watering garden
      const dishesUsage1 = dishesTime * 4; // Assumes 4 gallons of water per minute for doing dishes
      const teethUsage1 = teethTime * 3; // Assumes 3 gallons of water per minute for brushing teeth
  
      const totalUsage = showerUsage1 + gardenUsage1 + dishesUsage1 + teethUsage1;
  

      const { data , error } = await supabase.from('water_usage').insert({ total_usage: totalUsage });
      const { data1 , error1 } = await supabase.from('water_usage').insert({ shower_time: showerUsage1, garden_time: gardenUsage1,teeth_time: teethUsage1  });
    });

  
//-------------------------------------------------------------------------------------------------------------------

   //retrieving the data from the database
   async function fetchData() {
      return supabase
        .from('water_usage')
        .select('total_usage')
        .order('id', { ascending: false })
        .limit(2)
        .then(({ data, error}) => {
          if (error) {
            console.log(error);
          } else {
            console.log(data);
            const currentUsage = data[0].total_usage;
            const pastUsage = data[1].total_usage;

            //displaying the pie chart of current and past water usage
    const waterUsageChart1 = new Chart(document.getElementById('water-usage-chart'), {
      type: 'pie',
      data: {
       labels: ['Current Usage', 'Past Usage'],
       datasets: [{
           data: [currentUsage, pastUsage],
           backgroundColor: ['#ff6384', '#36a2eb']
       }]
     },
     options: {
         title: {
           display: true,
           text: 'Water Usage'
         }
        }
      });
    }
  });
}
fetchData();
//-------------------------------------------------------------------------------------------------------------------
   //retrieving the data for the current different usages 
   //const { data, error } = await supabase.from('water_usage').select('shower_usage, garden_usage, dishes_usage, teeth_usage').order('id', { ascending: false }).limit(1);
   async function fetchData2() {
      return supabase
        .from('water_usage')
        .select('shower_usage, garden_usage, dishes_usage, teeth_usage')
        .order('id', { ascending: false })
        .limit(1)
        .then(({ data: data1, error: error1 }) => {
          if (error1) {
            console.log(error1);
          } else {
            console.log(data1);
            const showerUsage = data2[0].shower_time;
            const gardenUsage = data2[0].garden_time;
            const dishesUsage = data2[0].dishes_time;
            const teethUsage = data2[0].teeth_time;

      // display the bar chart for the current usages
      const waterUsageChart2 = new Chart(document.getElementById('water-usage-chart'), {
        type: 'bar',
        data: {
          labels: ['Shower', 'Garden', 'Dishes', 'Teeth'],
          datasets: [{
            data: [showerUsage, gardenUsage, dishesUsage, teethUsage],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#cc65fe']
          }]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Current Water Usages'
          }
        }
      });
    }
  });

  }
fetchData();

</script>

<canvas id="water-usage-chart"></canvas>
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
