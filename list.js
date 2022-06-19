var shopping_list;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


shopping_list = ['fruits', 'vegetables', 'drinks', 'cheese', 'crisps', 'soap', 'shampoo', 'bread', 'towel', 'napkins'];


document.getElementById('button').addEventListener('click', (event) => {
  if (!!shopping_list.length) {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = shopping_list.shift();

    element_list.appendChild(new_li);
  }

});

document.getElementById('input').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list2');
  let new_li2 = document.createElement('li');
  new_li2.innerText = getNumberOrString(document.getElementById('text').value);

  element_list2.appendChild(new_li2);

});