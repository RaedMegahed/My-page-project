
//level3 lesson3 v#1
//setTimeout vs setInterval

// let i = 1
// const testFun = () => {
//     website.innerText = i
//     i++
// }


// const stopFun = setInterval(testFun, 1000);



// sec.addEventListener("click", (eo) => {
//     clearInterval(stopFun)
// })


//level3 lesson3 v#2
//JavaScript Auto writing

let counter = 1
const autoWriting = () => {
    website.innerText = "{My-profile}".slice(0, counter)
    counter++
}

setInterval(autoWriting, 300);


































