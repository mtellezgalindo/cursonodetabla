const fs = require('fs')
const colors = require('colors')


//Esto es lo mismo que la funcion de abajo
/* 
const crearArchivo = (base = 5, ) =>{


    return  new Promise((resolve, reject) => {

        let salida = ""
        let nombreArchivo = `tabla-${base}.txt`
        console.log('================')
        console.log('   Tabla del :', base)
        console.log('================')
    
        for(let i = 1; i<=10 ;i++){
            salida += `${base} x ${i}  es igual = ${base * i}\n`
        }
        console.log(salida);

        fs.writeFileSync(nombreArchivo,salida)
        resolve(nombreArchivo)
    
    })

} */


const crearArchivo = async (base = 5, listar= false, hasta =10 ) =>{

    try{

        let salida = ""
        let consola = ""
        let nombreArchivo = `tabla-${base}.txt`
        
    
        for(let i = 1; i<=hasta ;i++){
            salida += `${base} x ${i}  = ${base * i}\n`
            consola += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${base * i}\n`
        }
        if(listar == true){
            console.log('================'.blue)
            console.log('   Tabla del :'.green,colors.red (base))
            console.log('================'.blue)
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/${nombreArchivo}`,salida)
        return nombreArchivo
    }catch(err){
        throw err
    }



}




module.exports = {
    crearArchivo
}