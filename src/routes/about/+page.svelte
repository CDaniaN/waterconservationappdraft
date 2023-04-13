<script>
  const members = [
    {
      img: "imgPath",
      name: "Jahnvi Panchal",
      description:
        "I am a computer science major who enjoys front end development. My hobbies are reading, hiking, dancing, and playing with my puppy.",
      email: "jahnvi@csu.fullerton.edu",
    },
    {
      img: "imgPath",
      name: "Jennah Kanan",
      description: "TODO",
      email: "TODO@mail.com",
    },
    {
      img: "imgPath",
      name: "Dania Nasereddin",
      description:
        "Hello! I'm Dania! I am a computer science major at CSUF. I love playing video games, walking my dog, and painting in my free time.",
      email: "dnasereddin@csu.fullerton.edu",
    },
  ];
</script>

<svelte:head>
  <title>ABOUT | Water Conservation</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  {#each members as { img, name, description, email }}
    <div class="card">
      <div class="content">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p>Team Member</p>
        <p>{description}</p>
        <p>{email}</p>
      </div>
      <a class="button" href={`mailto:${email}`} target="_blank">Contact</a>
    </div>
  {/each}
</section>

<!-- OLD CODE -->

<!-- <div class = "rows">
  <div class = "columns">
    <div class = "note">
      <img src = "img1.jpg" alt="Jahnvi" style = "width:100%">
      <div class = "containers">
        <h2>Jahnvi Panchal</h2>
        <p class = "title">Team Member</p>
        <p>I am a computer science major who enjoys front end development. My hobbies are reading, hiking, dancing, and playing with my puppy.</p>
        <p>jahnvi@csu.fullerton.edu</p>
        <p><button class = "buttons">Contact</button></p>
      </div>
    </div>
  </div>

  <div class = "columns">
    <div class = "notes">
      <img src = "img2.jpg" alt = "Jennah Kanan" style = "width: 100%">
      <div class = "containers">
        <h2> Jennah Kanan</h2>
        <p class = "title">Team Member</p>
        <p>Some text that describes me</p>
        <p>example@example.com</p>
        <p><button class = "buttons">Contact</button></p>
      </div>
    </div>
  </div>

  <div class = "columns">
    <div class = "notes">
      <img src = "img3.jpg" alt = "Dania Nasereddin" style = "width: 100%">
      <div class = "containers">
        <h2> Dania Nasereddin</h2>
        <p class = "title">Team Member</p>
        <p>Some text that describes me</p>
        <p>example@example.com</p>
        <p><button class = "buttons">Contact</button></p>
      </div>
    </div>
  </div>
</div>

<style>
  @media screen and (max-width: 650px) {
    .columns {
      width: 100%;
      display: block;
    }
  }

  .columns {
      float: left;
      width: 33.3%;
      margin-bottom: 16px;
      padding: 0 8px;
  }

  .containers{
      padding: 0 16px;
  }

  .containers::after {
      clear: both;
      display: table;
      content: "";
  }

  .title{
      color: grey;
  }

  .buttons{
      width: 100%;
      border: none;
      outline: 0;
      padding: 8px;
      display: inline-block;
      background-color: #000;
      color: white;
      text-align: center;
      cursor: pointer;
  }

  .buttons:hover{
      background-color: #555;
  }
</style> -->

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
  }

  section .card {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    width: 100%;
    justify-content: space-between;
    gap: 16px;
    padding: 32px;
    border-radius: 8px;
    background-color: white;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .content img {
    width: 100%;
    max-height: 128px;
    height: 100%;
    border: 1px solid black;
    border-radius: 4px;
    object-fit: cover;
  }

  .button {
    padding: 8px;
    background-color: black;
    color: white;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    transition: background-color 100ms ease-in-out;
  }

  .button:hover {
    background-color: #333;
  }
</style>
