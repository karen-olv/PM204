console.log("hola mundo js desde el servidor")

/* promedio 2 variables */
let edad1 = 11
let edad2 = 33 
console.log("edad promedio")
console.log((edad1 + edad2)/2)

/* medir tiempo de proceso */
console.time("proceso")

for(let i=0; i<100000; i++){}

console.timeEnd("proceso")


/* objetos tipo tabla  */
let usuario = [
    {nombre: "Karen", edad: 22},
    {nombre: "diego", edad: 22},
]
    console.table(usuario)
