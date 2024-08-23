const liItem = document.querySelectorAll(".item");
const cont = document.querySelector("#categories");
const upperLi = document.querySelectorAll("#categories li ul");
const lowestLi = document.querySelectorAll("#categories .item ul li");
lowestLi.forEach((element) => {
  element.style.border = "1px solid #808080";
  element.style.borderRadius = "4px";
  element.style.padding = "8px 16px";
});
upperLi.forEach((element) => {
  element.style.listStyleType = "none";
  element.style.padding = "0";
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.gap = "8px";
});
cont.style.display = "flex";
cont.style.flexDirection = "column";
cont.style.gap = "16px";
console.log(`Number of categoties: ${liItem.length}`);

liItem.forEach((element) => {
  element.style.backgroundColor = "#F6F6FE";
  element.style.listStyleType = "none";
  element.style.padding = "16px";
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.gap = "16px";
  element.children[0].style.margin = "0";

  console.log(`Category: ${element.children[0].textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
