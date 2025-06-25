function capy(a) {
    const otvet = a.nextElementSibling;
    if (otvet.style.display == "block") {
        otvet.style.display = "none"
    } else {
        otvet.style.display = "block"
    }
}