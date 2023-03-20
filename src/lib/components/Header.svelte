<div class="header">
  <!-- <img src="images/logo.png" class="logo"> -->
  <!-- Change this to our image -->
  <nav>
    <!-- Navigation bar -->
    <ul>
      <li><a href="/">Home</a></li>
      <!-- Add link to home page -->
      <li><a href="/">Your Data</a></li>
      <!--Add link and change name -->
      <li><a href="/">Tips</a></li>
      <!--Add link and change name -->
      <li><a href="/">About Us</a></li>
      <!--Add link -->
      <li><a href="/">Contact</a></li>
      <!--Can keep this or remove -->
    </ul>
  </nav>
  <a href='/login'>
    <button class="button" id="button1">Log In</button>
  </a>
  <a href = "/sign_up"><button class="button" id="button2">Sign Up</button></a>
</div>

<style>
  .header /*the navigation bar*/ {
    width: 100%;
    height: 15vh; /*might have to change*/
    display: flex;
    align-items: center;
  }

  .logo {
    width: 80px;
    margin-top: 10px;
    cursor: pointer;
  }

  nav {
    flex: 1;
    padding-left: 450px;
  }

  nav ul li /*to align navigation bar*/ {
    display: inline-block;
    list-style: none; /*maybe can change this*/
    margin: 0 15px;
  }

  nav ul li a /*decorating navigation bar*/ {
    text-decoration: none; /*can change this up*/
    color: black; /*can change up*/
    font-size: 15px; /*can change up*/
    font-weight: 600;
    text-transform: uppercase;
  }

  #button1 {
    text-transform: uppercase;
    background: linear-gradient(
      to bottom,
      #378de5 3%,
      #48789b 100%
    ); /*color of button--> change color*/
    border: 1px solid #5e97d1; /*can change up*/
    color: white; /*change color*/
    border-radius: 30px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    margin: 10px;
    padding: 12px 20px;
    text-decoration: none;
    box-shadow: 1px 4px 12px rgba(94, 28, 68, 0.15); /*dont know what this is --> should change*/
    text-shadow: 0 1px 0 #528ecc;
  }

  #button2 {
    text-transform: uppercase;
    background: linear-gradient(
      to bottom,
      #cbcbcb 3%,
      #fff 100%
    ); /*color of button--> change color*/
    border: 1px solid #cbcbcb; /*can change up*/
    color: #5e97d1; /*change color*/
    border-radius: 30px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    margin: 10px;
    padding: 12px 20px;
    text-decoration: none;
    box-shadow: 1px 4px 12px rgba(94, 28, 68, 0.15); /*dont know what this is --> should change*/
    text-shadow: 0 1px 0 #528ecc;
  }

  .button:hover {
    box-shadow: 3px 8px 22px rgba(94, 28, 68, 0.15); /*dont know what this is --> should change*/
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
  }
</style>
