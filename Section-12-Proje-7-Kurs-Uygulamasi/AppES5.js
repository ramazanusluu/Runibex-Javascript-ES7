//  Course Constructor
function Course(title, instructor, image) {
  this.title = title;
  this.instructor = instructor;
  this.image = image;
}

//  UI Constructor
function UI() {}

UI.prototype.addCourseToList = function (course) {
  const list = document.getElementById("course-list");
  let html = `
    <tr>
        <td>
            <img src="img/${course.image}" width="50px"/>
        </td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        </td>
    </tr>
  `;
  list.innerHTML += html;
};

UI.prototype.clearControls = function () {
  const title = (document.getElementById("title").value = "");
  const instructor = (document.getElementById("instructor").value = "");
  const image = (document.getElementById("image").value = "");
};

UI.prototype.deleteCourse = function (element) {
  if (element.classList.contains("delete")) {
    element.parentElement.parentElement.remove();
  }
};

UI.prototype.showAlert = function (message, className) {
  let alert = `
    <div class="alert alert-${className}">
        ${message}
    </div>
  `;
  const row = document.querySelector(".row");
  //beforeBegin, afterBegin, beforeEnd, afterEnd
  row.insertAdjacentHTML("beforebegin", alert);
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
};

document.getElementById("new-course").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;
  const instructor = document.getElementById("instructor").value;
  const image = document.getElementById("image").value;
  //   console.log(title, instructor, image);
  //---------------------------------------------------------
  //   create course object
  const course = new Course(title, instructor, image);

  //   create UI
  const ui = new UI();

  if (title === "" || instructor === "" || image === "") {
    ui.showAlert("Formu doldurunuz", "warning");
  } else {
    //   add course to list
    ui.addCourseToList(course);

    //   clear control
    ui.clearControls();

    ui.showAlert("Kay??t Ba??ar??l??", "success");
  }

  e.preventDefault();
});

document.getElementById("course-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteCourse(e.target);
  ui.showAlert("Silme i??lemi ba??ar??l??", "danger");
});
