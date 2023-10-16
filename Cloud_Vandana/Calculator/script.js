// // let equalPressed = 0;
// // let buttonInput = document.querySelectorAll(".button");
// // let input = document.getElementById("input");
// // let equal = document.getElementById("equal");
// // let clear = document.getElementById("clear");
// // let erase = document.getElementById("delete");

// // // window.onload = () => {
// // //         // debugger
// // //     input.value = "";
// // // };
// // // buttonInput.forEach((buttonClass) => {
// // //     buttonClass.addEventListener("click", () => {
// // //         // debugger
// // //       if (equalPressed === 1) {
// // //         // input.value = "";
// // //         equalPressed = 0;
// // //       }
// // //       input.value += buttonClass.value;
// // //     });
// // //   });

// // function calculator(){

// // }

// let buttons = document.getElementsByTagName('button');
// let result = document.getElementById('input');

// for(i = 0; i < buttons.length; i++){
//     buttons[i].onclick = ()=>{
//         let input = this.innerText;
//         updateDisplay(input)
//     }
// }

// function updateDisplay(input){
//     let currentDisplay = result.innerText
//     if(currentDisplay == "0"){
//        if(input != "C" && input != "DEL" && input != "="){
//             result.innerText = ""
//             result.innerText = input
//        }
//     }
//     else{
//         if(input == "DEL"){
//             result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
//             // if(result.innerText == ""){
//             //     result.innerText = "0"
//             // }
//         }
//         if(input == "C"){
//             result.innerText = "0"

//         }
//         if(input != "C" && input != "DEL" && input != "="){
//             result.innerText += input
//         }
//         if(input == "="){
//             let display = result.innerText
//             result.innerText = eval(display)
//         }
//     }
// }

let buttons =document.getElementsByTagName('button');

let result = document.getElementById('result');

for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
        
    }
}
function updateDisplay(input){
    let currentDisplay = result.innerText
    if(currentDisplay=="0"){
        if(input!="C"&&input!="DEL" && input!="="){
            result.innerText=""
            result.innerText=input
        }

    }
    else{
       
    
        if(input=="DEL"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
            // if(result.innerText==""){
            //     result.innerText="0"
            // }
        }
        if(input=="C"){
            result.innerText="0"
        }
        if(input!="C"&&input!="DEL"&&input!="="){
            result.innerText+=input
            x = x+6
            x+=7
        }

        if(input=="="){          
            let display = result.innerText
            result.innerText= eval(display)
        }
    }

}






