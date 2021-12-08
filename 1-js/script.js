


const pass = intentos => {
    const password = Math.floor(Math.random() * 100)
    console.log(password)
    for (let i= 0; i < intentos; i++) {
        const dato = prompt('Introduce un número del 0 al 100')
        if (+dato === password) {
            return alert('Contraseña correcta')
        } if (+dato < password) {
            alert('La contraseña es un número más alto')
            continue
            i++
        } else
            alert('La contraseña es un número más bajo')
            continue
            i++
    }
    return alert('Has perdido')
}

pass(5)



