function experiencia(anos) {
    if (anos <= 1) {
        console.log("Iniciante")
        return "Iniciante"
    } else if (anos <= 3) {
        console.log("Intermediário")
        return "Intermediário"
    } else if (anos <= 6) {
        console.log("Avançado")
        return "Avançado"
    } else {
        console.log("Jedi Master")
        return "Jedi Master"
    }
}

var anosEstudo = 7
experiencia(anosEstudo)