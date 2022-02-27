

const allCopyBtns = document.querySelectorAll(".copy")


allCopyBtns.forEach(item => {
    item.addEventListener("click", (eo) => {
       const copy = item.nextElementSibling.innerText
       navigator.clipboard.writeText(copy)

       item.innerText = "Copied!"
       setTimeout(() => {
        item.innerText = "Copy"
       }, 600);

    })
});












