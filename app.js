

const { crearArchivo } = require("./orden/multiplica");
const argv=require("./confi/yargs");
require("colors");

console.clear();


crearArchivo(argv.b, argv.l,argv.h)

  .then( nombreArchivo => console.log(nombreArchivo, "creado".green) )
  .catch( err => console.log( err) );
