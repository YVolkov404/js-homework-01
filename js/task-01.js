const item = document.querySelectorAll('.item');
console.log('Number of categories:', item.length);

const list = document.querySelectorAll('.item ul');

list.forEach((item) => {
    console.log('Category:', item.previousElementSibling.textContent);
    console.log('Elements:', item.children.length)
});

