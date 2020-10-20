// возвращает строку соответсвующую имени класса указанной цифры
function getClock(clockIndex) {
    let clock = 'clock';
    for(let i = 0; i < 7; i++)
        if(clockIndex == i){
            clock += i;
            return clock;
        }
}
// [h][h]:[m][m]:[s][s]
// [0][1]:[2][3]:[4][5] 
const clNumb = [getClock(1), getClock(2), getClock(3), getClock(4), getClock(5), getClock(6)];

// действия с цифрами в часах
function setStyle(clock, i) {
    document.getElementById(clock + '_' + i).style.backgroundColor='#ff0000';
    document.getElementById(clock + '_' + i).style.boxShadow='0px 0px 25px #ff0000';
}
function clearStyle(clock, i) {
    document.getElementById(clock + '_' + i).style.backgroundColor='';
    document.getElementById(clock + '_' + i).style.boxShadow='';
}
function clear(clock) {
    for(let i = 1; i < 8; i++) 
        clearStyle(clock, i)
}

function set0(clock) {
    for(let i = 1; i < 8; i++) { 
        if(i == 4) continue;
            setStyle(clock, i);
    }
}
function set1(clock) {
    for(let i = 1; i < 7; i++) {
        if(i == 1  || i == 2 || i == 4 || i == 5 ) continue;
        setStyle(clock, i);
    }
}
function set2(clock) {
    for(let i = 1; i < 8; i++) {
        if(i == 2 || i == 6) continue;
        setStyle(clock, i);
    } 
}
function set3(clock) {
    for(let i = 1; i < 8; i++) {
        if(i == 2 || i == 5) continue;
        setStyle(clock, i);
    } 
}

function set4(clock) {
    for(let i = 2; i < 7; i++) {
        if(i == 5) continue;
        setStyle(clock, i);
    } 
}

function set5(clock) {
    for(let i = 1; i < 8; i++) {
        if(i == 3 || i == 5) continue;
        setStyle(clock, i);
    } 
}
function set6(clock) {
    for(let i = 1; i < 8; i++) {
        if(i == 3) continue;
      setStyle(clock, i);
    } 
}
function set7(clock) {
    for(let i = 1; i < 7; i++) {
        if(i == 2 || i == 4 || i == 5) continue;
       setStyle(clock, i);
    } 
}
function set8(clock) {
    for(let i = 1; i < 8; i++) 
       setStyle(clock, i);
}
function set9(clock) {
    for(let i = 1; i < 8; i++) {
        if(i == 5) continue;
        setStyle(clock, i);
    } 
}

const set = [set0, set1, set2, set3, set4, set5, set6, set7, set8, set9];

function setTwoNumbers(params, time) {
    let ind;
    let lengthFirstNumb;
    let strParams = String(params);
    let length = strParams.length;
    if(time === "hh") {
        ind = 0;
        lengthFirstNumb = 10;
    } else if(time === "mm") {
        ind = 2;
        lengthFirstNumb = 6;
    } else if(time === "ss") {
        lengthFirstNumb = 6;
        ind = 4;
    }
    if(length == 1) {
        clear(clNumb[ind]);
        clear(clNumb[ind+1]);
        for (let i = 0; i < 10; i++) 
            if(strParams[ind % 2] == i)
                set[i](clNumb[ind+1]);
    }
    if(length == 2) {
        clear(clNumb[ind]);
        for (let i = 0; i < lengthFirstNumb; i++) 
            if(strParams[ind % 2] == i)
                set[i](clNumb[ind]);
        clear(clNumb[ind+1]);
        for (let i = 0; i < 10; i++) 
            if(strParams[(ind+1) % 2] == i)
                set[i](clNumb[ind+1]);
    }
}

function SetTime(Date) {
    let sec = Date.getSeconds();
    setTwoNumbers(sec, "ss");
    if(sec == 0) {
        let min = Date.getMinutes(); 
        setTwoNumbers(min, "mm");
        if(min == 0)
            setTwoNumbers(Date.getHours(), "hh");
    }
}

const startDate = new Date();
setTwoNumbers(startDate.getHours(), "hh");
setTwoNumbers(startDate.getMinutes(), "mm");
setTwoNumbers(startDate.getSeconds(), "ss");

setInterval(() => SetTime(new Date()), 100);