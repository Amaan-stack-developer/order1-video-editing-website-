let toggle_off = document.getElementById('toggle-off');
let body = document.getElementById('bdy');
let toggle_on = document.getElementById('toggle-btn'); 
let list_icon = document.getElementById('list-icon');
let notification = document.getElementById('notification');
let profile_icon = document.getElementById('profile-icon');
let editor_hub = document.getElementById('editor-hub');
let input_box = document.getElementById('input-box');
let para = document.getElementById('para');
let heading1 = document.getElementById('heading1');
let heading2 = document.getElementById('heading2');
let heading3 = document.getElementById('heading3');
let heading4 = document.getElementById('heading4');
let heading5 = document.getElementById('heading5');
let list = document.getElementById('lst');
let profile_box = document.getElementById('profile-box');
let cross = document.getElementById('cross');
let header = document.getElementById('header');
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');
let section4 = document.getElementById('section4');
let section5 = document.getElementById('section5');
let section6 = document.getElementById('section6');


function light_theam(){
    body.style.backgroundColor = 'white';
    list_icon.style.color = 'black';
    notification.style.color = 'black';
    toggle_on.style.display = 'none';
    profile_icon.style.color = 'black'
    toggle_off.style.display = 'block';
    editor_hub.style.color = 'black';
    input_box.style.border = '1px solid black';
    para.style.color = 'black';
    heading1.style.color = 'black';
    heading2.style.color = 'black';
    heading3.style.color = 'black';
    heading4.style.color = 'black';
    heading5.style.color = 'black';
}
function dark_theam(){
    body.style.backgroundColor = 'black';
    list_icon.style.color = 'white';
    toggle_on.style.display = 'block';
    toggle_off.style.display = 'none';
    profile_icon.style.color = 'white';
    editor_hub.style.color = 'white';
    notification.style.color = 'white';
    input_box.style.border = 'none';
    para.style.color = 'white';
    heading1.style.color = 'white';
    heading2.style.color = 'white';
    heading3.style.color = 'white';
    heading4.style.color = 'white';
    heading5.style.color = 'white';
}

toggle_on.addEventListener('click', ()=>{
    light_theam();
})
toggle_off.addEventListener('click', ()=>{
    dark_theam();
})

list_icon.addEventListener('click', ()=>{
    list.style.display = 'block';
})
list_icon.addEventListener('dblclick', ()=>{
    list.style.display = 'none';
})
list_icon.addEventListener('cancel', ()=>{
    list.style.display = 'none';
})
profile_icon.addEventListener('click', ()=>{
    profile_box.style.display = 'block';
    header.style.filter = 'blur(5px)';
    section1.style.filter = 'blur(5px)';
    section2.style.filter = 'blur(5px)';
    section3.style.filter = 'blur(5px)';
    section4.style.filter = 'blur(5px)';
    section5.style.filter = 'blur(5px)';
    section6.style.filter = 'blur(5px)';
})
cross.addEventListener('click', ()=>{
    profile_box.style.display = 'none';
    header.style.filter = 'blur(0px)';
    section1.style.filter = 'blur(0px)';
    section2.style.filter = 'blur(0px)';
    section3.style.filter = 'blur(0px)';
    section4.style.filter = 'blur(0px)';
    section5.style.filter = 'blur(0px)';
    section6.style.filter = 'blur(0px)';
})






