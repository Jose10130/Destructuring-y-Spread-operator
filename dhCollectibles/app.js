const importar =require('./collectibles.js')

const HotToys = importar("Hot Toys")
const Bandai =importar("Bandai")
const StarWars=importar("Star Wars")




const unifiedCollectibles= [...HotToys,...Bandai,...StarWars]


//console.log (unifiedCollectibles)

const collectibles={
    figuras:unifiedCollectibles,
    listFigures:function(){
        this.figuras.forEach((figuras,i)=>{
            console.log(`${i+1}- ${figuras.figuras}
            ${figuras.nombre}--> precio : ${figuras.precio} -cantida : ${figuras.cantidad} `)
          })
    },


    figuresByBrand:function (brand) {
        this.figuras.filter(({figuras})=>{
            const figurasFiltrados=figuras.tolowerCase()===brand.tolowerCase()
           
        
    })
     return figurasFiltrados
    }}
collectibles.listFigures()
//console.log(collectibles.figuresByBrand('Star Wars'));