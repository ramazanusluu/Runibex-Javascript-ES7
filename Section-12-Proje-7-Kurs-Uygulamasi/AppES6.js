class Course {
  constructor(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
  }
}

class UI {
  addCourseToList(course) {
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
  }

  clearControls() {
    const title = (document.getElementById("title").value = "");
    const instructor = (document.getElementById("instructor").value = "");
    const image = (document.getElementById("image").value = "");
  }

  deleteCourse(element) {
    if (element.classList.contains("delete")) {
      element.parentElement.parentElement.remove();
    }
  }

  showAlert(message, className) {
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
  }
}

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

    ui.showAlert("Kayıt Başarılı", "success");
  }

  e.preventDefault();
});

document.getElementById("course-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteCourse(e.target);
  ui.showAlert("Silme işlemi başarılı", "danger");
});
