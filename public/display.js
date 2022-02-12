var newn = document.getElementById('newrname')
var neww = document.getElementById('newwd')
var newh = document.getElementById('newht')
var newc = document.getElementById('newclr')
// var width = document.getElementById('newwd')
var updatetxt = document.getElementById('rtext')
var darkmode = document.getElementById('darkmode');
var mainbdy = document.getElementById('main-body');
var label1 = document.getElementById('label1');

function updatedisplay() {
    rshape.style.width = neww.value;
    rshape.style.height = newh.value;
    updatetxt.textContent = newn.value;
    rshape.style.fill = newc.value;
}

// event listeners for input changes
newn.addEventListener('change', updatedisplay);
neww.addEventListener('change', updatedisplay);
newh.addEventListener('change', updatedisplay);
newc.addEventListener('change', updatedisplay);

darkmode.addEventListener('change', function() {
    if (this.checked) {
        mainbdy.style.backgroundColor = "#000000";
        label1.style.color = "#e0ebeb";
    } else {
        mainbdy.style.backgroundColor = "#ffffff";
        label1.style.color = "#032d30";
    }
})
