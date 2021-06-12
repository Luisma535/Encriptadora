 const crypt = require('bcryptjs')
 console.log("1:Encriptar","\n2:Salir")

const readline = require('readline').createInterface({
    input:process.stdin,
    output: process.stdout
})
readline.question('Seleccione una opcion: ', (opc)=>{
  let salt = crypt.genSaltSync()
 if(opc == 1){
     readline.question('Escriba el texto para encriptar: ',(txt)=>{
     console.log("\033[34m" + crypt.hashSync(txt,salt))
     console.log("\033[37m")
     readline.close()
   })
 }else if(opc == 2){
  readline.close()
 }else{
   console.error("No se encontro la opcion")
   readline.close()
 }
 
})

 
