<svelte:head>
  <title>Login</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="forms">
    <div class="form login">
      <div class="form-content">
        <!-- Log in page -->
        <header>Log in</header>
        <form action="#">
          <!-- username input field -->
          <div class="field input-field">
            <input type="text" placeholder="Username" class="input" />
          </div>

          <!-- password input field -->
          <div class="field input-field">
            <input type="password" placeholder="Password" class="password" />
          </div>

          <!-- "forgot your password?" link -->
          <div class="form-link">
            <a href="/forgot_password" class="forgot-pass"
              >Forgot your password?</a
            >
          </div>

          <!-- log in button -->
          <div class="field button-field">
            <!--<button>Log in</button>-->
            <a href="/"><button class="link" type="submit">Log in</button></a>
          </div>
        </form>

        <!-- "sign up!" link -->
        <div class="form-link">
          <span>
            Don't have an account?{" "}
            <a class="link signup-link" href= "/signup"
              >Sign up!</a>
          </span>
        </div>
        <!--let { data, error } = await supabase.auth.signInWithPassword({
        email: 'someone@email.com',
        password: 'LsLYkQsiwOyMcJMBLEqy'})-->
        
      </div>
    </div>
</section>

<style>
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
  /* .form.signup {
    display: none;
    pointer-events: none;
  }
  .forms.show-signup .form.signup {
    display: flex;
    pointer-events: auto;
  }
  .forms.show-signup .form.login {
    opacity: 0;
    pointer-events: none;
  } */
  header {
    font-size: 28px;
    font-weight: 600;
    color: #232836;
    text-align: center;
    margin-bottom: 2rem;
  }
  form {
    margin-top: 30px;
  }
  .form .field {
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 20px;
    border-radius: 6px;
  }
  
  .field input,
  .field button {
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
  .field button {
    color: #fff;
    background-color: #006d8f;
    transition: all 0.4s ease;
    cursor: pointer;
    width: 99%;
    font-weight: bold;
    outline: none;
  }
  .field button:hover {
    background-color: #00ace5;
  }
  .form-link span .link {
    background-color: none;
  }
  .form-link {
    text-align: center;
    margin-top: 10px;
  }
  .form-link span,
  .form-link a {
    font-size: 14px;
    font-weight: 400;
    color: #232836;
  }
  .form a {
    color: #0061ff;
    text-decoration: none;
  }
  /*.form-content a:hover {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: #0061ff;
  }*/
</style>