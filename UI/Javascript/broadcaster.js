
       

    let statusbox=document.getElementById("mystatusbox");
    let attachbox=document.getElementById("attachbox");
    let iconbtn= document.getElementById("mybtn");
    let attachbtn= document.getElementById("btn");
    
    statusbox.style.display = "none";
    attachbox.style.display = "none";

       window.onclick = function(event) {
        if (event.target == statusbox) {
          statusbox.style.display = "none";
         }
        }

       
    iconbtn.addEventListener("click",() =>{
        statusbox.style.display = "block";
    });

    attachbtn.addEventListener("click",() =>{
        attachbox.style.display = "block";
    });

    window.onclick = function(event) {
        if (event.target == statusbox) {
          statusbox.style.display = "none";
         }
     }