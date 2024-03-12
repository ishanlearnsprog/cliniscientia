// display course details

function showCourseDetail(index) {
    const details = document.querySelectorAll(".detail-list");
    if (details[index].style.display == "block") {
        details[index].style.display = "none";
    } else {
        details.forEach(d => {
            d.style.display = "none";
        })
        details[index].style.display = "block";
    }
}