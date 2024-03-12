// display course details

function showCourseDetail(index) {
    const details = document.querySelectorAll(".sec3>ul>li>p");
    if (details[index].style.display == "block") {
        details[index].style.display = "none";
    } else {
        details.forEach(d => {
            d.style.display = "none";
        })
        details[index].style.display = "block";
    }
}