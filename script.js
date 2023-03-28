function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api/').then(res => res.json()).then(data => {
    hideSpinner();
    displayUser(data.results[0]);
  });
}
function displayUser(user) {
  if (user.gender === 'male') {
    document.body.style.backgroundColor = 'blue';
  } else {
    document.body.style.backgroundColor = 'purple';
  }
  const userImage = document.querySelector('img');
  userImage.setAttribute("src", `${user.picture.medium}`)
  const userName = document.querySelector(".space-y-3").firstElementChild;
  const userEmail = document.querySelector("p.text-xl:nth-child(2)");
  const userPhone = document.querySelector("p.text-xl:nth-child(3)");
  const userLocation = document.querySelector("p.text-xl:nth-child(4)");
  const userAge = document.querySelector(".space-y-3").lastElementChild;
  userName.innerHTML = `<span class="font-bold">Name:</span>${user.name.first} ${user.name.last}`;
  userEmail.innerHTML = `<span class="font-bold">Email: </span>${user.email}`
  userPhone.innerHTML = `<span class="font-bold">Phone: </span>${user.phone}`
  userLocation.innerHTML = `<span class="font-bold">Location: </span>${user.location.street.name}`
  userAge.innerHTML = `<p class="text-xl"><span class="font-bold">Age: </span>${user.dob.age}</p>`
}
function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}
function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}
document.querySelector('#generate').addEventListener('click', fetchUser);
fetchUser();

