function pares (x, y) {
    if (x == y){
        return "Os números são iguais"
    } else if (x > y) {
        if (y % 2 == 0)
            console.log(y)
        while (y < x){
            y ++
            if (y % 2 == 0)
                console.log(y)
        }
    } else {
        if (x % 2 == 0)
            console.log(x)
        while (x < y){
            x ++
            if (x % 2 == 0)
                console.log(x)
        }
    }
}
pares(100, 20)
