//search markup, not needed cause going for meets expectations
// const searchDiv = document.querySelector(".search-container");
// const searchForm = ` <form action="#" method="get">
// <input type="search" id="search-input" class="search-input" placeholder="Search...">
// <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
// </form>`;
// searchDiv.insertAdjacentHTML("afterbegin", searchForm);

//gallery container div
const galleryDiv = document.querySelector("#gallery");

//fetch request and empty array to store results
let employees = [];

fetch(
  "https://randomuser.me/api/?inc=picture,name,location,postcode,cell,dob,email&nat=us&results=12"
)
  .then((response) => response.json())
  .then((data) => generatePerson(data.results));

//generates 12 employees on page
function generatePerson(data) {
  employees = data;
  let html = "";

  employees.map((item, index) => {
    html = `<div class="card" data-index=${index}> 
        <div class="card-img-container">
            <img class="card-img" src=${item.picture.large} alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
            <p class="card-text">${item.email}</p>
            <p class="card-text cap">${item.location.city}, ${item.location.state}</p>
        </div>
    </div>`;

    galleryDiv.insertAdjacentHTML("beforeend", html);
  });
  getEmployeeCard(data);
  return;
}

//function for selecting card for modal window and sending data there

function getEmployeeCard(data) {
  const getEmployeeArray = document.getElementsByClassName("card");
  for (let i = 0; i < getEmployeeArray.length; i++) {
    getEmployeeArray[i].addEventListener("click", (e) => {
      modalWindow(data[i]);
    });
  }
}

//function for creating modal window based on clicked employee card

function modalWindow(employee) {
  let date = new Date(employee.dob.date);
  let modalHTML = "";

  modalHTML = `<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="
            ${employee.picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${employee.name.first} 
            ${employee.name.last}</h3>
            <p class="modal-text">${employee.email}</p>
            <p class="modal-text cap">${employee.location.city}, 
            ${employee.location.state}</p>
            <hr>
            <p class="modal-text">${employee.cell}</p>
            <p class="modal-text">${employee.location.street.number} 
            ${employee.location.street.name} 
            ${employee.location.city}, 
            ${employee.location.state} 
            ${employee.location.postcode}</p>
            <p class="modal-text">Birthday: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()} </p>
        </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
  modalClose();
}

//function for close button, removes modal window from DOM
function modalClose() {
  const closeBtn = document.querySelector(".modal-close-btn");
  let modalContainer = document.querySelector(".modal-container");
  let modal = document.querySelector(".modal");

  closeBtn.onclick = function () {
    modalContainer.remove();
  };
}
