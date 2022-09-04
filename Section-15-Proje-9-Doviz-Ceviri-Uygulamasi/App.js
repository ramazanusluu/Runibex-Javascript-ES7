const api_key = "9c7ee2cac7993aabb4d9901a";
const url = `https://v6.exchangerate-api.com/v6/${api_key}`;

//elements
const currency_one = document.getElementById("currency_one");
const currency_two = document.getElementById("currency_two");
const list_one = document.getElementById("list_one");
const list_two = document.getElementById("list_two");
const amount = document.getElementById("amount");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

fetch(url + "/codes")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const items = data.supported_codes;
    let options;
    for (let item of items) {
      console.log(item);
      options += `
        <option value=${item[0]}>${item[1]}</option>
      `;
    }
    list_one.innerHTML = options;
    list_two.innerHTML = options;
  });
