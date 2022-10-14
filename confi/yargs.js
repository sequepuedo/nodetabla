const color=require("colors");
color.setTheme({

    error:"blue"
})

const argv = require("yargs")

  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:"es la base de la tabla"

  })
  .option("l", {
    alias: "lista",
    type: "boolean",
    default: false,
   describe:"muestra la tabla en consola" 
  })

.option("h",{
   alias:"limite",
  type:"number",
  default:10,
  describe:"es el limte de la tabla"
})

  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero".error;
    }
    return true;
  }).argv;

  module.exports=argv; 