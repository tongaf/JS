var meses = [
    {"mes":"enero", "ingreso" : 1500,"egreso" : 1500 } ,
    {"mes":"febrero", "ingreso" : 2500,"egreso" : 2500 } ,
    {"mes":"marzo", "ingreso" : 84683,"egreso" : 1155 } ,
    {"mes":"abril", "ingreso" : 135353,"egreso" : 1533 } ,
    {"mes":"mayo", "ingreso" : 1535,"egreso" : 5434 } ,
    {"mes":"junio", "ingreso" : 4343354,"egreso" : 5434543 } ,
    {"mes":"julio", "ingreso" : 435453,"egreso" : 4543 } ,
    {"mes":"agosto", "ingreso" : 78351,"egreso" : 7816 } ,
    {"mes":"septiembre", "ingreso" : 1878,"egreso" : 95634 } ,
    {"mes":"octubre", "ingreso" : 48483,"egreso" : 9483 } ,
    {"mes":"noviembre", "ingreso" : 35483,"egreso" : 53133 } ,
    {"mes":"diciembre", "ingreso" : 3843,"egreso" : 348133 }
 ]
for ( var i=0 ; i<meses.length ; i++) {
    alert ("el balance de " + meses [i].mes + " es $"+ (meses[i].ingreso - meses[i].egreso))
}