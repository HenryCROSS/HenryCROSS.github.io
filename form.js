var selectedType = document.querySelector("#getContentType");

selectedType.addEventListener('change', e => {
    var selected = document.querySelector("#orderNumber");
    if (e.target.value == "OrderProblem") {
        selected.style.visibility = "visible";
    }
    else {
        selected.style.visibility = "hidden";
    }

});