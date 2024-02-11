const drops = document.querySelectorAll("#question .container > div");
drops.forEach((drop)=>{
    drop.addEventListener("click",()=>{
        drop.querySelector(".extras").classList.toggle("dropdown");
        const button =  drop.querySelector(".visible span:last-child");
        button.classList.toggle("animate");
        setTimeout(()=>{
            button.innerHTML = button.innerHTML === "add" ? "remove" : "add"; 
        },200);
    });
});