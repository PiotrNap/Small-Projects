const main = document.getElementById("main");
const addUser = document.getElementById("add-user");
const double = document.getElementById("double-money");
const millOnly = document.getElementById("money-only");
const sortBy = document.getElementById("sort-by");
const calculate = document.getElementById("calculator");

let data = [];

// fetch random user and add 'money'
async function getUser() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser); // Push the new created data to the
}

getUser();
getUser();
getUser();

// Add new object to 'data' array
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Double the money
function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

// Sort by money amount
function sortResults() {
  data.sort((a, b) => b.money - a.money);

  return updateDOM();
}

// Show only millionaires
function showMillionaires() {
  data = data.filter(item => item.money >= 1000000);

  return updateDOM();
}

// Calculate the total amount
function calculateAll() {
  const value = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthElem = document.createElement("div");
  wealthElem.innerHTML = `<h3>Total wealth: <strong>${formatMoney(
    value
  )}</strong></h3>`;
  main.appendChild(wealthElem);
}

// Update DOM
function updateDOM(providedData = data) {
  // Clear main div by setting it to default
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach(item => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

//Event Linsteners
addUser.addEventListener("click", getUser);
double.addEventListener("click", doubleMoney);
sortBy.addEventListener("click", sortResults);
millOnly.addEventListener("click", showMillionaires);
calculate.addEventListener("click", calculateAll);
