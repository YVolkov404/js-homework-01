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

