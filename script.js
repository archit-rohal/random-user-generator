function fetchUser() {
  fetch('https://randomuser.me/api/').then(res => res.json()).then(data => {
    displayUser(data.results[0]);
  });
}
function displayUser(user) {
  const userDisplay = document.querySelector('#user');
  if (user.gender === 'male') {
    document.body.style.color = 'blue';
  } else {
    document.body.style.color = 'purple';
  }
  userDisplay.innerHTML = `
  
         <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="https://randomuser.me/api/portraits/women/45.jpg"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> sarawilson@gmail.com
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> (555) 555-5555
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> Boston MA
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> 30</p>
            </div>
          </div>
        </div>
  `
}
// document.querySelector('#generate').textContent = data.results[0].gender;
// function fetchData() {

// fetch('https://randomuser.me/api/').then(res => res.json()).then(data =>
//   document.querySelector('#user').innerHTML =
//   `<div class="flex justify-between">
//            <div class="flex">
//              <img
//                class="w-48 h-48 rounded-full mr-8"
//                src= ${data.results[0].picture.medium}
//              />
//              <div class="space-y-3">
//                <p class="text-xl">
//                  <span class="font-bold">Name: </span>${data.results[0].name.first} ${data.results[0].name.last}
//                </p>
//                <p class="text-xl">
//                  <span class="font-bold">Email: </span>${data.results[0].email}
//                </p>
//                <p class="text-xl">
//                  <span class="font-bold">Phone: </span> (555) 555-5555
//                </p>
//                <p class="text-xl">
//                  <span class="font-bold">Location: </span> Boston MA
//                </p>
//                <p class="text-xl"><span class="font-bold">Age: </span> 30</p>
//              </div>
//            </div>
//          </div>
//       </div>`);
document.querySelector('#user').addEventListener('click', fetchUser);
fetchUser();
