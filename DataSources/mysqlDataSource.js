const { DataSource } = require('apollo-datasource');
var mysql = require("../ConexionBD/conexion")();
var util = require('util');


class mysqlDs extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.context = config.context;
    this.cache = config.cache || new InMemoryLRUCache();
  }

   async results(tabla) {
       let query = util.promisify(mysql.query).bind(mysql);
       var cachekey = await this.cache.get('results'+tabla);
       if(cachekey){
           console.log('traido desde el cache');
           return JSON.parse(cachekey);
       }else{
            try {
                var rows = await query('CALL SELECT_ALL_NATIVE('+"'"+ tabla+"'"+')');
                rows = rows[0].map((row)=> ({...row}));
                this.cache.set('results'+tabla,JSON.stringify(rows),{ttl:20});
                console.log('traido desde la BD');
                return rows; 
                } catch (error) {
                    console.log(error);
                    throw new Error (error);
                }
       }
    }

    async result( tabla, id) {
        let query = util.promisify(mysql.query).bind(mysql);
        try {
            var rows = await query('CALL SELECT_ONE_NATIVE('+ id +','+"'"+ tabla+"'"+')');
             rows= rows[0][0];
             return {...rows};    
        } catch (error) {
            console.log(error);
            throw new Error (error);
        }
    }

    async login(args){
        let query = util.promisify(mysql.query).bind(mysql);
        try {
            var consulta = 'CALL SELECT_USER('+args.usuario+')';
            console.log(consulta);
            var  user = await query('CALL SELECT_USER(' +"'"+ args.usuario +"'"+ ')');
            user= user[0][0];
            if(!user){
                var err = new Error('Usuario no encontrado');
                throw err;
            }
            if (!(user.password === args.password)) {
                var err = new Error('Contraseña invalida');
                throw err;
            }
            return {...user};
                } catch (error) {
            return error;
        }
    }
}

module.exports = mysqlDs;


