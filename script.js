let percentage = document.querySelector("#percentage");
let progress = document.querySelector("#progress");

let count = 0;

let inv = setInterval(function(){
    if(count <=99){
        count ++;
        progress.style.width = `${count}%`;
        percentage.textContent = `${count}%`;
        
    }
    else{
        document.querySelector("h2").textContent = "Downloaded File";
        clearInterval(inv);
    }
},3000/100)