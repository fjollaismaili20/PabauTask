const form = document.getElementById("myForm");
const shuffleBtn = document.getElementById("shuffle");
const changeBtn = document.getElementById("change");
const showBtn = document.getElementById("show");

shuffleBtn.addEventListener("click", function () {
  let formElements = [];
  for (let child of form.children) {
    formElements.push(child.children[0].value);
    console.log(child);
  }
  formElements.reverse();
  let formHtml = "";
  for (let input of formElements) {
    formHtml += `<label>
            <input id="${input}" type="checkbox" name="checkbox" value="${input}"> ${input}
        </label>`;
  }
  form.innerHTML = formHtml;
});

changeBtn.addEventListener("click", function () {
  let newFormElements = ["Job", "Senior", "Frontend", "Fair"];
  let formHtml = "";
  for (let input of newFormElements) {
    formHtml += `<label>
            <input id="${input}" type="checkbox" name="checkbox" value="${input}"> ${input}
        </label>`;
  }
  form.innerHTML = formHtml;
});

showBtn.addEventListener("click", function () {
  let checkedElements = [];
  for (let child of form.children) {
    if (child.children[0].checked) {
      checkedElements.push(child.children[0].value);
      child.children[0].checked = false; // Uncheck the element
    }
  }
  alert("Selected elements: " + checkedElements);
});
