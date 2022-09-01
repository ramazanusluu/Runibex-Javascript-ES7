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
            <a href="#" class="btn btn-danger btn-slm">Delete</a>
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

  //   add course to list
  ui.addCourseToList(course);

  //   clear control
  ui.clearControls();

  e.preventDefault();
});
