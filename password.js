// function checkPassWord() {
//     let p1 = document.getElementById('password').value;
//     console.log("hello");
//     if (p1 === '12345678') {
// console.log("hello");
//                alert("Password matched!");
//     } else {
//         alert("Password mismatch!");
//     }
// }

document.querySelector('form').addEventListener('submit', function password (e){
    e.preventDefault();
    let p1 = document.querySelector('password').value;
 
    if( p1 === '12345678') {
        alert("Password matched!");
    }
    else {
        alert("Wrong!");
    }

    
});
