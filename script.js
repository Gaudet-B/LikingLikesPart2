console.log("Great success!");
function clickedLike(element) {
    let string = element.previousElementSibling.innerHTML;
    let number = Number(string.split(" ", 1));
    number++;
    element.previousElementSibling.innerHTML = number + " like(s)";
}          