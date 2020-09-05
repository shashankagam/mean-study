let registerUser= ()=>{

    let username= document.querySelector("#username").value;
    let password=document.querySelector("#username").value;
    let email= document.querySelector("#email").value;
    let mobile= document.querySelector("#mobile").value;


    let url= `http://localhost:3000/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;

    let xhr= XMLHttpRequest();

    xhr.open("GET",url );

    xhr.onload= ()=>{
        var response= xhr.responseText;
        console.log(response);

        
        document.querySelector("#username").value="";
        document.querySelector("#username").value="";
        document.querySelector("#email").value="";
        document.querySelector("#mobile").value="";

    }

    xhr.send();

}