var tablinks=document.getElementsByClassName('tab-links');
var tabcontants=document.getElementsByClassName('tab-contant');

function opentab(tabname){
    for(var tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(var tabcontant of tabcontants){
        tabcontant.classList.remove('active-tab');
    }
    document.getElementById(tabname).classList.add('active-tab');
    // document.getElementById('tabname').classList.add('active-tab');
}

