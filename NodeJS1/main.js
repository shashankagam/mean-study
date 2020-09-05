let ourAjax= function(){

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:5600/ ");

    xhr.onload=()=>{
        const myres= xhr.responseText;
        console.log(myres);
    };
    xhr.send();
}