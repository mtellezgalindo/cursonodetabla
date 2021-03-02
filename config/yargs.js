const argv = require('yargs')
    .options({
        'b':{
            alias:'base',
            type:'number',
            demandOption:true,
            describe:'Es la base de la tabla multiplicar'
        },
        'l':{
            alias:'listar',
            type:'boolean',
            default:false,
            describe:'Muestra la tabla en consola'

        },
        'h':{
            alias:'hasta',
            type:'number', 
            default:false,
            describe:'Muestra hasta donde quiere que sea la tabla de multiplicar'
        }
    })
    .check( (argv, options) =>{
        if(isNaN(argv.base)){
            throw 'la base tiene que ser un numero'
        }
        return true
    })
    .argv

module.exports = argv