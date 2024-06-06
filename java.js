let btn =document.getElementById('btn')
btn.addEventListener('click', function (e) {
    e.preventDefault();
    let firstname =
    document.getElementById('first').value
  let  lastname =
    document.getElementById('last').value
  let street =
    document.getElementById('street').value
  let state =
  document.getElementById('state').value
  let email =
  document.getElementById('email').value
  let cellular =
  document.getElementById('cellular').value
  let male =
  document.getElementById('male').value
  let female =
  document.getElementById('female').value
const user = {
    first: firstname,
    last: lastname,
    street: street,
    state: state,
    email: email,
    cellular: cellular,
    male: male,
    female: female,
  };
  
  console.log("user--", user);
  })