function flash(elementId) {
 var element = document.getElementById(elementId);
 element.className += ' flashing';

 element.parentNode.replaceChild(element.cloneNode(true), element);
}
