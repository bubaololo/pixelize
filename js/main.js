let range = document.querySelector('input');


range.addEventListener('change', attrChange);

function print() {

    console.log(range.value);

}

function attrChange() {

    let rate = range.value;

    let comp = document.getElementById('comp');
    let morph = document.getElementById('morph');

        comp.setAttribute("width",rate);
        comp.setAttribute("height",rate);
        morph.setAttribute("radius",(rate/2));


}