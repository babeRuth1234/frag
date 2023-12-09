let randPic = document.getElementById("rando")
let firstPic = document.getElementById("first")
let secPic = document.getElementById("second")
let thPic = document.getElementById("third")
// let rack = document.getElementById("swit")
// let firstSelect = document.getElementById("wan")

// randomly select photos  from the array above
const teamPic = [
    "IMG-20230321-WA0003.jpg",
    "IMG-20230203-WA0003.jpg",
    "IMG-20230205-WA0003.jpg",
    "IMG-20230320-WA0007.jpg",
    "IMG-20230321-WA0003.jpg",
    "willie2.jpg",
    "IMG-20221215-WA0252.jpg",
    "IMG-20230203-WA0002.jpg",
    "e6b3b414-80b1-4fe4-8633-88d170f4c684.jpg"
]

// let imageArray = []

// function getImage() {

//     counter = 5;

//     for(let i = 0; i < counter; i++) {
//         const rand = Math.floor(Math.random() * teamPic.length) + 1;
//         if(!imageArray.includes(rand)){
//             imageArray.push(rand);
//         }
//     }

    
//     while()
// }

// getImage()

// console.log(imageArray);


// display random selection
randPic.addEventListener("click", function(){
let arrSafe = []

let randum1 = Math.floor(Math.random() * teamPic.length) 
let randum2 = Math.floor(Math.random() * teamPic.length) 
let randum3 = Math.floor(Math.random() * teamPic.length) 
let randum4 = Math.floor(Math.random() * teamPic.length) 
let randum5 = Math.floor(Math.random() * teamPic.length) 

// loop while the length of array is < 5
// choose random number 
// if random rumber not in array
// add
console.log(Math.floor(Math.random() * teamPic.length))
    // console.log("jesse green",randum1,randum2,randum3,randum4,randum5)
        // rack.innerHTML = `<div background = url;(${teamPic[randum]}) class="pic1"><div class="title1"><div class="left"><p class="wildword1">WILDCARD</p></div><div class="right"><p class="wildnum1">15</p></div></div></div>
        // `  
        let style = document.createElement('style')
        style.innerHTML = `
        .sunny {
            background-image: url(${teamPic[randum1]});  
        }
        .chan {
            background-image: url(${teamPic[randum2]});
        }
        .ronin{
            background-image: url(${teamPic[randum3]});
        }
        .piper{
            background-image: url(${teamPic[randum4]});
        }
        .ollie{
            background-image: url(${teamPic[randum5]});
        }
        `
        document.head.append(style)  
    
})
// // display first selection
// firstPic.addEventListener("click", function(){
//     let style = document.createElement('style')
//         style.innerHTML = `
//         .sunny {
//             background-image: url(${teamPic[]});  
//         }
//         .chan {
//             background-image: url(${teamPic[]});
//         }
//         .ronin{
//             background-image: url(${teamPic[]});
//         }
//         .piper{
//             background-image: url(${teamPic[]});
//         }
//         .ollie{
//             background-image: url(${teamPic[]});
//         }
//         `
//         document.head.append(style)  
// })

// // display second selection
// secPic.addEventListener("click", function(){
//     let style = document.createElement('style')
//     style.innerHTML = `
//     .sunny {
//         background-image: url(${teamPic[]});  
//     }
//     .chan {
//         background-image: url(${teamPic[]});
//     }
//     .ronin{
//         background-image: url(${teamPic[]});
//     }
//     .piper{
//         background-image: url(${teamPic[]});
//     }
//     .ollie{
//         background-image: url(${teamPic[]});
//     }
//     `
//     document.head.append(style) 
// })

// // display third selection
// thPic.addEventListener("click", function(){
//     let style = document.createElement('style')
//     style.innerHTML = `
//     .sunny {
//         background-image: url(${teamPic[]});  
//     }
//     .chan {
//         background-image: url(${teamPic[]});
//     }
//     .ronin{
//         background-image: url(${teamPic[]});
//     }
//     .piper{
//         background-image: url(${teamPic[]});
//     }
//     .ollie{
//         background-image: url(${teamPic[]});
//     }
//     `
//     document.head.append(style)
// })