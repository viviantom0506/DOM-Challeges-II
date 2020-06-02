//checks if the password is right when the user clicks on the submit button
document.querySelector('form').addEventListener('submit', function (e){
    e.preventDefault();
    let p1 = document.getElementById('password').value;
    let username = document.getElementById('username');
    let tagofH1 = document.getElementById("form");
    if( p1 === '12345678' && username != "") {
        tagofH1.innerText = "Filled out!";   
    }
    else {
        alert("Wrong!");
    }
    
    
});
