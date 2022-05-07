const addCheckBoxListeners = () => {
  const checkBoxes = document.querySelectorAll(".item-check");
  checkBoxes.forEach((checkBox) =>
    checkBox.addEventListener("click", (event) => {
      console.log(event.target);
      if(event.target.checked) {
        console.log("completed")
        event.target.nextElementSibling.style.textDecoration = "line-through"
        event.target.nextElementSibling.style.color ="gray"
      }
      else {
        console.log("uncompleted")
        event.target.nextElementSibling.style.textDecoration = "none"
        event.target.nextElementSibling.style.color ="black"


      }
    })
  );
};

export default addCheckBoxListeners