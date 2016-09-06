(function(){
var _id = function _id(id) {
    return document.getElementById(id);
};


var edit = _id('edit');
var submit = _id('submit');
var fname = _id('fName');
var lName = _id('LName');
var gender = _id('gender1');
var state = _id('state');
var r1 = _id('r1');
var r2 = _id('r2');
var selectedGender;
var display = _id('display');
submit.addEventListener('click', function() {

    if (r1.checked) {
        selectedGender = r1.value;
    } else if (r2.checked) {
        selectedGender = r2.value;
    }

    display.innerHTML = "It will display person information " + "<br>" + fname.value + lName.value + selectedGender + state.value.toUpperCase();
    edit.disabled = false;
});

edit.addEventListener('click', function showText() {
    document.getElementById("myForm").reset();
    display.innerHTML = "";
});
})();