<svelte:head>
  <title>Forgot Password</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="forms">
  <div class="form forgot-password">
    <div class="form-content">
      <!-- Log in page -->
      <header>Reset Password</header>
      <form action="#">
        <!-- username input field -->
        <div class="field input-field">
          <input type="password" placeholder="Password" class="password" />
        </div>

        <!-- password input field -->
        <div class="field input-field">
          <input
            type="password"
            placeholder="Retype Password"
            class="password"
          />
        </div>

        <!-- submits and brings you back to log in page , give this a a class and style -->
        <a href="/login"><button class="link" type="submit">Reset Password</button></a>
      </form>
    </div>
  </div>
</section>

<style>
    header {
    font-size: 28px;
    font-weight: 600;
    color: #232836;
    text-align: center;
    margin-bottom: 2rem;
  }

  .forms {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .form {
    max-width: 430px;
    width: 100%;
    padding: 30px;
    border-radius: 3px;
    background: #f9f8f6;
    opacity: 0.95;
  }

  .form .field {
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 20px;
    border-radius: 6px;
  }

  .field input {
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

  .field input {
    padding: 0 15px;
    border: 1px solid #dddddd;
  }

  .field input:focus {
    border-bottom-width: 2px;
  }


  .link {
    padding: 10px;
    width: 100%;
    border: none;
    display: block;
    box-sizing: border-box;
    border-radius: 6px;
    background: #eeeeee;
    transition: background 0.2s, border-color 0.5s;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    background-color: #006d8f;
    transition: all 0.4s ease;
    cursor: pointer;
    outline: none;
    margin-top: 20px;
  }

  .link:hover {
    background-color: #00ace5;
  }

  a {
    text-decoration: none;
  }
  /* 
 button {
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

  a button {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    font-weight: 400;
  } */
</style>
