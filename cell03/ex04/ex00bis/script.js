const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

function changeColor() {
    $("body").css("background-color", randColor());
}