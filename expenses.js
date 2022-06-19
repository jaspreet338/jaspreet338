var earnings, expenses, item;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earnings = [0, 0, 0];


document.getElementById('income').addEventListener('click', (event) => {
  let element_total = document.getElementById('total');
  earnings.push(getNumberOrString(document.getElementById('number').value));
  earnings.forEach((item) => {
    element_total.innerText = earnings.reduce((a,b) => a+b, 0);
  });
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('number').value);

  element_list.appendChild(new_li);

});
expenses = [0, 0, 0];


document.getElementById('gone').addEventListener('click', (event) => {
  let element_total2 = document.getElementById('total2');
  expenses.push(getNumberOrString(document.getElementById('number2').value));
  expenses.forEach((item) => {
    element_total2.innerText = expenses.reduce((a,b) => a+b, 0);
  });
  let element_list2 = document.getElementById('list2');
  let new_li2 = document.createElement('li');
  new_li2.innerText = getNumberOrString(document.getElementById('number2').value);

  element_list2.appendChild(new_li2);
  let element_left = document.getElementById('left');
  earnings.push(getNumberOrString(document.getElementById('number2').value));
  earnings.forEach((item) => {
    element_left.innerText = earnings.reduce((a,b) => a+b, 0);
  });

});