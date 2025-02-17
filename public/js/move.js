let btns = document.querySelectorAll(".btn");

for(let btn of btns){
    btn.addEventListener("click",()=>{
        window.location.href=`http://localhost:9000/${btn.innerText}`
    });
}
