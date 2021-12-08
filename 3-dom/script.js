'use strict'


const reloj = document.querySelector('body')



const crearDiv =  time => {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'hora')
    reloj.appendChild(newDiv)
    newDiv.innerHTML = time
}


const time = e => {
    const clock = new Date
    const parts = {
        hour: clock.getHours(),
        min: clock.getMinutes(),
        sec: clock.getSeconds()
    }
    if (parts.hour < 10) {
        parts.hour = '0' + parts.hour
    }
    if (parts.min < 10) {
        parts.min = '0' + parts.min
    }
    if (parts.sec < 10) {
        parts.sec = '0' + parts.sec
    }

    const format = (`${parts.hour}:${parts.min}:${parts.sec}`)
    crearDiv(format)
}

time()
//setInterval(time, 1000)


// Listeners
reloj.addEventListener('DOMContentLoaded', time)

