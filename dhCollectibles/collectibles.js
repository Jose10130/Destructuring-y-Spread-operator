const importar =(figura)=>{
    const fs =require("fs") 
    let nombreFiguras= "";

     if (figura==="Hot Toys"){
      nombreFiguras="figuras1"}
    else if (figura ==="Bandai"){
        nombreFiguras= "figuras2"
    }
    else if ( figura=== "Star Wars"){
        nombreFiguras="figuras3"
    }
    const path = `./datos/${nombreFiguras}.json`
    const figurajson=fs.readFileSync(path,'utf-8')
    const figuraParse =JSON.parse(figurajson)
    return figuraParse
    }
    
    module.exports = importar

    //console.log (importar("Hot Toys"))