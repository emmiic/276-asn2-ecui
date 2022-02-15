var newn = document.getElementById('newrname');
var newfc = document.getElementById('newfclr');
var neww = document.getElementById('newwd');
var newh = document.getElementById('newht');
var newc = document.getElementById('newclr');
var newbc = document.getElementById('newbclr');
var newcr = document.getElementById('newcr');
var newop = document.getElementById('newop');

var updatetxt = document.getElementById('rtext');
var darkmode = document.getElementById('darkmode');
var mainbdy = document.getElementById('main-body');
var label1 = document.getElementById('label1');

function updatedisplay() {
    rshape.style.width = neww.value;
    rshape.style.height = newh.value;
    updatetxt.textContent = newn.value;
    updatetxt.style.color = newfc.value;
    rshape.style.fill = newc.value;
    rshape.style.stroke = newbc.value;
    rshape.style.rx = newcr.value;
    rshape.style.opacity = newop.value;
}

// event listeners for input changes
newn.addEventListener('change', updatedisplay);
neww.addEventListener('change', updatedisplay);
newh.addEventListener('change', updatedisplay);
newc.addEventListener('change', updatedisplay);
newfc.addEventListener('change', updatedisplay);
newbc.addEventListener('change', updatedisplay);
newcr.addEventListener('change', updatedisplay);
newop.addEventListener('change', updatedisplay);

darkmode.addEventListener('change', function() {
    if (this.checked) {
        mainbdy.style.backgroundColor = "#000000";
        label1.style.color = "#e0ebeb";
    } else {
        mainbdy.style.backgroundColor = "#ffffff";
        label1.style.color = "#032d30";
    }
})
