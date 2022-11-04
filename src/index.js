//InitFunction takes care on the default Values
const init = ({ parent = {},
                dim = {h:0,w:0},
                unit = "cm",
                cells = {h:1,w:1},
                subCells={h:1,w:1},
                offset = {h:0,w:0}
                } = {})=>{
                return {dim:dim, unit: unit, cells: cells, offset: offset, kind: "parent", subCells: subCells}  
}


const treatCell=(data)=>{
let retAr=[]
for(let h=0; h < data.subCells.h ; h++){
let rowAr=[]
     const pos_h = data.pos_h + (data.cellsize_h *h) 
    for(let w=0; w < data.subCells.w ; w++){
     const pos_w = data.pos_w + (data.cellsize_w *w) 
     rowAr[w]={pos_h: pos_h, pos_w: pos_w}    
    }
    retAr[h]=rowAr
}
return retAr
}


const get_pos=(grid, h,w, sh,sw) => {
   const cell = grid[h][w]
   return cell[sh][sw] 
}
const sub_init=(data)=>{
    if(data.verbose){
    console.log('params sub_init------>>>>')
    console.log(data)
    console.log('-----Ende params sub_init>>>>>>')
    }
    const parent = data.parent
    const counter_h  = data.counter_h
    const counter_w  = data.counter_w
    const border_h = data.border_h
    const border_w = data.border_w
    const parent_cellsize_h = parent.dim.h / (parent.cells.h )
    const parent_cellsize_w =  parent.dim.w /(parent.cells.w )
    const offset_h   = parent.offset.h + parent_cellsize_h * (counter_h) + border_h 
    const offset_w   = parent.offset.w + parent_cellsize_w * (counter_w) + border_w
    const cellsize_h = parent_cellsize_h/data.parent.subCells.h
    const cellsize_w = parent_cellsize_w/data.parent.subCells.w
    const retObj     ={pos_h: offset_h , pos_w: offset_w , cellsize_h: cellsize_h, cellsize_w: cellsize_w, subCells: parent.subCells }
    const retAr =treatCell(retObj)
    return retAr 
}



const grid=(    
    { parent = {},
    dim = {h:0,w:0},
    unit = "cm",
    cells = {h:1,w:1},
    subCells={h:1,w:1},
    offset={h:0,w:0},
    verbose=false,
    border_h=0,
    border_w=0

}
)=>{
    parent = init({dim:dim, cells:cells,unit:unit, offset:offset, subCells:subCells})
    let retObj = []
   for(let h = 0; h < cells.h; h++){
   let innerArray=[]
    for(let w = 0; w < cells.w; w++){
    let pdf_sub = sub_init({ parent: parent,counter_h:h,counter_w:w, cells:subCells, border_h: border_h, border_w:border_w, verbose:verbose})
    if(verbose){
    console.log(pdf_sub)
    }
    innerArray[w]=pdf_sub
   }
   retObj[h] = innerArray
   }
  return retObj
}


export default {
 init,
 get_pos,
 sub_init,
 grid
}