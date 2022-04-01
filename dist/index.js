document.querySelector(".color-btn").addEventListener("click", function () {
    if (document.body.classList.contains("purple")){
        document.body.classList.remove("purple");
        document.body.classList.add("green");
    }
    else {
        document.body.classList.add("purple");
        document.body.classList.remove("green");
    }
});