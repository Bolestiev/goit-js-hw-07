const liItem = document.querySelectorAll(".item");

console.log(`Number of categoties: ${liItem.length}`);

liItem.forEach((element) => {
  console.log(`Category: ${element.children[0].textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
