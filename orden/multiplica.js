
const fs=require("fs");
const color=require("colors");

const crearArchivo=async(base=5,lista=false,h)=>{
   
    
    try{
    let salida="",consola="";
    for(let i=1;i<=h;i++){
        salida+=(`${base} "x"${i} = ${base*i}\n`);
        consola+=(`${color.yellow(base)} ${"x".red} ${color.blue(i)} = ${color.cyan(base*i)}\n`);
    }
   if(lista){
    console.log("=============================".rainbow);
    console.log("   tabla del:".rainbow, base   );
    console.log("=============================".rainbow);
    console.log(consola);

}
    

     fs.writeFileSync(`./salidad/tabla-${base}.txt`,salida);

    return `tabla-${base}.txt`.blue;
    

}catch (err){

throw err;

}
}

  module.exports={
    crearArchivo 

}
