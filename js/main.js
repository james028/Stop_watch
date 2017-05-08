var stopwatch = document.getElementsByClassName("main-stopwatch"),
    start = document.querySelector(".button-start"),
    stop = document.querySelector(".button-stop"),
    reset = document.querySelector(".button-reset"),
    minutes = document.querySelector(".minutes"),
    seconds = document.querySelector(".seconds"),
    milisec = document.querySelector(".miliseconds"),
    currTime = 0,
    Interval = 0,
    lastUpdTime = new Date().getTime(); //new Date() -  Tworzy instancje Date, które pozwalają na pracę z danymi opisującymi datę i czas, getTime() - Zwraca liczbę reprezentującą czas dla określonej daty stosownie do czasu uniwersalnego.




start.addEventListener("click", startT);
stop.addEventListener("click", stopT);
reset.addEventListener("click", resetT);



document.addEventListener("keyup", function(e) {
    
    if (e.keyCode === 13) {
        startT();    
    } 
},false);

document.addEventListener("keyup", function(e) {
    
    if (e.keyCode === 32) {
        stopT();    
    }  
},false);


document.addEventListener("keyup", function(e) {
    
    if (e.keyCode === 16) {
        resetT();    
    }  
},false);



//funkcja 

function pad(n) {
    return ("00" + n).substr(-2);//metoda substr zwraca podciąg rozpoczynający się w określonej lokalizacji i o określonej długości.
}


function updateT() {
    var now = new Date().getTime(),
        dt = now - lastUpdTime;
    
    currTime += dt;
    
    var time = new Date(currTime);
    
    minutes.innerHTML = pad(time.getMinutes());
    seconds.innerHTML = pad(time.getSeconds());
    milisec.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));  //math.floor zwraca największą liczbę całkowitą mniejszą od lub równą danej
    
    lastUpdTime = now;
    
}



// funkcja startujaca stoper

function startT() {
    
    if (!Interval) {
        // ! ten operator neguje wyrazenie
        lastUpdTime = new Date().getTime();
        Interval = setInterval(updateT, 1);
    }
}


//funkcja zatrzymuja stoper

function stopT() {
    clearInterval(Interval);
    Interval = 0;
}

//funkcja resetująca stoper   

function resetT() {
    stopT();
    currTime = 0;
    
    minutes.innerHTML = seconds.innerHTML = milisec.innerHTML = pad(0);  //pad(0) =="00"
}







