setInterval(function(){
    d = new Date()
    hours = d.getHours()
    minutes = d.getMinutes()
    seconds = d.getSeconds()
    hrotation = hours*30+minutes/2
    mrotation = minutes*6+seconds/10
    srotation = seconds*6
    hour_hand.style.transform = `rotate(${hrotation}deg)`
    minute_hand.style.transform = `rotate(${mrotation}deg)`
    second_hand.style.transform = `rotate(${srotation}deg)`
},1000)