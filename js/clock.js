const clock = document.querySelector("#clock");
clock.style.color = "white";
clock.style.zIndex = "1";
clock.style.position = "absolute";
clock.style.bottom = "0";
clock.style.right = "0";
clock.style.fontSize = "30px";
clock.style.fontFamily = "cursive";

function showClock(){
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth()+1).padStart(2,"0");
    const date = String(now.getDate()).padStart(2,"0");
    const hour = String(now.getHours()).padStart(2,"0");
    const min = String(now.getMinutes()).padStart(2,"0");
    const sec = String(now.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${year}년 ${month}월 ${date}일 ${hour}시 ${min}분 ${sec}초`;
    
}




showClock();
setInterval(showClock, 1000);
