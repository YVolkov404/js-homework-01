/**
 * Write a script that, for each element in the ingredients array.
 * Will create a separate <li> element. Be sure to use the document.createElement() method.
 * Will add the ingredient name as its text content.
 * Will add the item class to the element.
 * Then will insert all <li> to the ul#ingredients list in a single operation.
 */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

ingredients.map(ingredient => {
  const list = document.querySelector('#ingredients');
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  list.appendChild(li);
  return list;
})

