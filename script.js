var img_links;

// Describe this function...
function start() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  img_links = ['https://c4.wallpaperflare.com/wallpaper/431/451/684/the-most-beautiful-picture-of-nature-wallpaper-preview.jpg', 'https://c4.wallpaperflare.com/wallpaper/758/323/699/nature-scenery-beautiful-mountain-wallpaper-wallpaper-preview.jpg', 'https://c4.wallpaperflare.com/wallpaper/819/944/903/pink-flowers-pictures-wallpaper-download-beautiful-pink-flowers-pictures-wallpaper-preview.jpg', 'https://c4.wallpaperflare.com/wallpaper/126/758/462/most-beautiful-sunsets-in-the-world-wallpaper-preview.jpg', 'https://c4.wallpaperflare.com/wallpaper/917/810/553/cool-and-beautiful-nature-desktop-wallpaper-image-1680%C3%971050-wallpaper-preview.jpg'];
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


start();
let element_images = document.getElementById('images');
element_images.setAttribute("src", img_links[0]);

let element_list = document.getElementById('list');


document.getElementById('btn1').addEventListener('click', (event) => {
  start();
  let element_images2 = document.getElementById('images');
  element_images2.setAttribute("src", img_links[0]);

});

document.getElementById('btn2').addEventListener('click', (event) => {
  let element_images3 = document.getElementById('images');
  img_links.unshift(img_links.pop());
  element_images3.setAttribute("src", img_links[0]);

});

document.getElementById('btn3').addEventListener('click', (event) => {
  let element_images4 = document.getElementById('images');
  img_links.push(img_links.shift());
  element_images4.setAttribute("src", img_links[0]);

});

document.getElementById('btn4').addEventListener('click', (event) => {
  start();
  let element_images5 = document.getElementById('images');
  img_links.unshift(img_links.pop());
  element_images5.setAttribute("src", img_links[0]);

});

document.getElementById('input').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text').value);

  element_list2.appendChild(new_li);

});