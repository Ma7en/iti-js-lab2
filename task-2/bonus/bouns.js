// solution - 1

var coursesUser = prompt(
    "Enter the course names and grades separated by comma (Math 85,Science 78): "
);

function getCourseInfo(courses) {
    splitC = courses.split(",");
    for (var i = 0; i < splitC.length; i++) {
        splitCours = splitC[i].split(" ");
        if (+splitCours[1] >= 60) {
            console.table([splitCours[0], splitCours[1], "Success"]);
        } else {
            console.table([splitCours[0], splitCours[1], "Fail"]);
        }
    }
    return courses;
}
getCourseInfo(coursesUser);
