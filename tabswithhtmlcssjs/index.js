const tabs = document.querySelectorAll(".tabs p");
const contents = document.querySelectorAll(".contents p");
console.log("tabs", tabs);
console.log("contents", contents);

tabs.forEach((tab, index) =>
  tab.addEventListener("click", function (e) {
    tab.classList.add("active");
    contents.forEach((content) =>
      content.addEventListener("click", () => {
        content.classList.add("active");
      })
    );
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((content) => {
      content.classList.remove("active");
    });
    contents[index].classList.add("active");
    tabs[index].classList.add("active");
  })
);
