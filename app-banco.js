var desenvolvimento = false;

var configuracoes = {
    producao: {
        server: "vialactea.database.windows.net",
        user: "bandtec",
        password: "#Gf48875555800",
        database: "ADSBancoProjeto",
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000,
            connectionTimeout: 5000
        }


    },
    desenvolvimento: {
        server: "vialactea.database.windows.net",
        user: "bandtec",
        password: "#Gf48875555800",
        database: "ADSBancoProjeto",
        options: {
            encrypt: true
        }
    }
}













//     },
//     desenvolvimento: {
//         server: "BASETESTE.database.windows.net",
//         user: "usuariotestes",
//         password: "senhatestes",
//         database: "BASETESTE",
//         options: {
//             encrypt: true
//         }
//     }
// }
 
var sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});

var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

function conectar() {
  return sql.connect(configuracoes[perfil])
  // return new sql.ConnectionPool();  
} 

module.exports = {
    conectar: conectar,
    sql: sql
}