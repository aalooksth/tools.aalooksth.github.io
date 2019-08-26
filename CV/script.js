function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = (d2.getTime() - d1.getTime())/1000;
    year = Math.floor(diff / (60 * 60 * 24 * 365.25))
    var day = Math.floor((diff % (60 * 60 * 24 * 365.25)) / 86400);
    var month = Math.floor(day/30);
    day = day % 30;

    return year + " years " + month + " month/s "+day +' day/s today' ;
}

function getmyAge(){
    return getAge(new Date(1994,8,17,13,0,0));
}

console.log(getmyAge());