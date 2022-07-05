4// // alert("Hello!!!Do you want to play a game??")

// console.log("Hello User")

// var a = 10;
// let b = 32.46;
// const c = "hello";

// console.log(a)
// console.log(b)
// console.lo
// document.write(a);



const subbut = document.getElementById("sub-but");
const message = document.getElementById("messages");
const lives = document.getElementById("life");
var userans ; 
var ans = Math.round(Math.random() * 100)

console.log(ans);
var lifes = 10;
console.log(message);
// Defining on click function   

subbut.onclick = () =>{
    var userans =  document.getElementById("inp-num").value;
    lifes--;
    if (userans==ans){
        location.href="./assets/win.html";
    }
    else if(lifes==0){
        location.href="./assets/lose.html";
    }
    else if(userans>ans){
        text = "Your number is high";
    }
    else if(userans<ans){
        text = "Your number is low";
    }
    console.log(text);
    console.log(lifes);

    message.innerHTML = text;
    lives.innerHTML=lifes;

}

