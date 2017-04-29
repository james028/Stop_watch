var stopwatch = document.getElementsByClassName("main-stopwatch"),
    start = document.getElementsByClassName("button-start"),
    stop = document.getElementsByClassName("button-stop"),
    reset = document.getElementsByClassName("button-reset"),
    minutes = document.getElementsByClassName("minutes"),
    seconds = document.getElementsByClassName("seconds"),
    milisec = document.getElementsByClassName("miliseconds"),
    currTime = 0,
    Interval = 0,
    lastUpdTime = new Date().getTime; //new Date() -  Tworzy instancje Date, które pozwalają na pracę z danymi opisującymi datę i czas, getTime() - Zwraca liczbę reprezentującą czas dla określonej daty stosownie do czasu uniwersalnego.











