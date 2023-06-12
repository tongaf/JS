var creditos = [
    {"plan" : "plan001" , "capital" : 150000 , "plazo" : 30 , "tasa" : 15},
    {"plan" : "plan002" , "capital" : 300000 , "plazo" : 180 , "tasa" : 10},
    {"plan" : "plan003" , "capital" : 485000 , "plazo" : 60 , "tasa" : 23}
]

for ( var i=0 ; i<creditos.length ; i++) {
    alert (" la tasa de interes del " + creditos[i].plan + " es " + (((creditos[i].capital * creditos[i].plazo) *creditos[i].tasa / 100 ) / 100 ))
}
