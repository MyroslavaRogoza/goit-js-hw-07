const parentList = document.querySelector('#categories');
const liItem = parentList.querySelectorAll('.item');
console.log('Number of categories:',liItem.length);
liItem.forEach(item=>{
    console.log('Category:',item.firstElementChild.textContent);
    console.log('Elements:',item.lastElementChild.children.length);
})