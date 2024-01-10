const parentList = document.querySelector('#categories');
const categoryItems = parentList.querySelectorAll('.item');
console.log('Number of categories: ',categoryItems.length);
categoryItems.forEach(item=>{
    console.log('Category: ',item.firstElementChild.textContent);
    console.log('Elements: ',item.lastElementChild.children.length);
})