/*Random function: 
1)In JS random funct. generate numbers from 0 to 1.
2)In order to get numbers till a particular range multiply it with a no. one greater than the range.
Eg-We want a number in range 0 to 10 then Math.random()*11
3)To get no. without decimal we use Math.floor(Math.random())*/

let choices=document.querySelectorAll(".choice")
let userscore=0,compscore=0
let user=document.querySelector("#user")
let comsc=document.querySelector("#comp")
let para=document.querySelector("#para")
//Printing all the available choices using forEach Loop
// let selid=choices.forEach(choice=>{
//     console.log(choice.getAttribute("id"))
// })


//Printing all the available choices using forEach Loop
// for(choice of choices){
//     console.log(choice.getAttribute("id"))
// }


//To Generate computer choices
const getCompChoice=()=>{
    const obj=["rock","paper","Scissor"]
    const idx=Math.floor(Math.random()*3)
    return obj[idx];
}

//Game Draw
const draw=()=>{
    console.log("Game Draw! Play again")
    para.innerText="Game Draw! Play again"
    para.style.backgroundColor="rgb(8,8,40)"
}


const playGame=(userchoice)=>{
    const compchoice= getCompChoice()
    console.log(`Userchoice=${userchoice},Compchoice=${compchoice}`)
    if(userchoice===compchoice){
        draw()
    } 
    else{
        let iswin=true;
        if(userchoice==="rock")
           iswin=compchoice==="paper"?false:true;
        else if(userchoice==="paper")
           iswin=compchoice==="rock"?true:false;
        else
            iswin=compchoice==="rock"?false:true;
        console.log(iswin)
    showWinner(iswin,userchoice,compchoice)
    }
   
}

//To declare Winner
const showWinner=(iswin,userchoice,compchoice)=>{
    if(iswin){
        userscore++
        user.innerText=userscore
        para.innerText=`Your ${userchoice} beats ${compchoice}`;
        para.style.backgroundColor="green"

    }
    else{
        compscore++
        comsc.innerText=compscore
        para.innerText=`Your ${userchoice} lost to ${compchoice}`
        para.style.backgroundColor="red"
    }
}

//To get id of selected choice
choices.forEach(choice=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playGame(userchoice)
        
    })     
})


