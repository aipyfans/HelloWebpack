function component() {
    var element = document.createElement('div');
    element.innerHTML = "Hello Test";
    return element;
}
document.body.appendChild(component());