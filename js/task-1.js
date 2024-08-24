const liItems = document.querySelectorAll(".item");

const categoriesContainer = document.querySelector("#categories");

const nestedLists = document.querySelectorAll("#categories > li > ul");
const allItems = document.querySelectorAll("#categories .item ul li");

allItems.forEach((element) => {
  element.style.border = "1px solid #808080";
  element.style.borderRadius = "4px";
  element.style.padding = "8px 16px";
});

nestedLists.forEach((ul) => {
  ul.style.listStyleType = "none";
  ul.style.padding = "0";
  ul.style.display = "flex";
  ul.style.flexDirection = "column";
  ul.style.gap = "8px";
});

categoriesContainer.style.display = "flex";
categoriesContainer.style.flexDirection = "column";
categoriesContainer.style.gap = "16px";

console.log(`Number of categories: ${liItems.length}`);

liItems.forEach((item) => {
  item.style.backgroundColor = "#F6F6FE";
  item.style.listStyleType = "none";
  item.style.padding = "16px";
  item.style.display = "flex";
  item.style.flexDirection = "column";
  item.style.gap = "16px";
  item.children[0].style.margin = "0";

  const header = item.querySelector("h2").textContent;

  const itemCount = item.querySelectorAll("ul > li").length;

  console.log(`Category: ${header}`);
  console.log(`Elements: ${itemCount}`);
});
