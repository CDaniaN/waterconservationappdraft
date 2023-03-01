const forms = document.querySelector(".forms"),
  links = document.querySelectorAll(".link");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    //log in fetch will be done here i think (the link to database)

    forms.classList.toggle("show-signup");
  })
})

//in here i think we have to check to make sure the passwords match in the reset password page and in the sign up page 