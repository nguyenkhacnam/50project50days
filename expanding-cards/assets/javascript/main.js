var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var panes = $$('.pane');

panes.forEach(function (pane) {
    pane.onclick = function () {
        removeActive();
        this.classList.add('active');
    }
})

function removeActive () {
    $('.pane.active').classList.remove('active');
}
