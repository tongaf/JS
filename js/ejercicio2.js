var creditos = [
    {"plan" : "plan001" , "capital" : 150000 , "plazo" : 30 , "tasa" : 0.15},
    {"plan" : "plan002" , "capital" : 300000 , "plazo" : 180 , "tasa" : 0.10},
    {"plan" : "plan003" , "capital" : 485000 , "plazo" : 60 , "tasa" : 0.23}
]

/*for ( var i=0 ; i<creditos.length ; i++) {
    alert (" la tasa de interes del " + creditos[i].plan + " es " + ((creditos[i].capital * creditos[i].plazo *creditos[i].tasa) / 100 ) )
}*/



var resultados = []

console.log(resultados)

resultados.push({"plan": creditos[0].plan, "interesgenerado": ((creditos[0].capital * creditos[0].plazo *creditos[0].tasa) / 100 )} );
resultados.push({"plan": creditos[1].plan, "interesgenerado": ((creditos[1].capital * creditos[1].plazo *creditos[1].tasa) / 100 )} );
resultados.push({"plan": creditos[2].plan, "interesgenerado": ((creditos[2].capital * creditos[2].plazo *creditos[2].tasa) / 100 )} );

console.log(resultados)

alert("el interes generado del " + resultados[0].plan + "es: " + resultados[0].interesgenerado)
alert("el interes generado del " + resultados[1].plan + "es: " + resultados[1].interesgenerado)
alert("el interes generado del " + resultados[2].plan + "es: " + resultados[2].interesgenerado)


