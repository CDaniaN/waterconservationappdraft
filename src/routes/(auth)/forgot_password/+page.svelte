<script>
  import { Auth } from "@supabase/auth-ui-svelte";
  import { ThemeSupa } from "@supabase/auth-ui-shared";

  export let data;
</script>

<svelte:head>
  <title>Forgot Password</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class='form'>
  <header>Reset Password</header>

  <Auth
    supabaseClient={data.supabase}
    view="forgotten_password"
    redirectTo={`${data.url}/reset-password?redirect=/`}
    showLinks={false}
    appearance={{
      theme: ThemeSupa,
      style: {
        input: `height: 50px;
          width: 100%;
          border: none;
          display: block;
          box-sizing: border-box;
          font-size: 16px;
          font-weight: 400;
          border-radius: 6px;
          background: #eeeeee;
        `,
        button: `height: 50px;
          width: 100%;
          border: none;
          display: block;
          box-sizing: border-box;
          font-size: 16px;
          font-weight: 400;
          border-radius: 6px;
          background-color: #00ace5;
        `
      },
    }}
  />
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