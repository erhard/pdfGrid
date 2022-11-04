import { jsPDF } from "jspdf";
import pdfGrid from "../index.js";
const orientation = "portrait";
// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF({
  orientation: orientation,
  unit: "cm",
});
//create a grid with 4 quadrants
//each quadrant has 6 rows and 10 cols
let height=29.7
let width = 21
const border_h = 1
const border_w = 0

//This line are very imortant to sync the orientation with jspdf and pdfGrid
//pdfGrid does not know "orientation" it only knows height and width
if(orientation == "landscape"){
  if (height > width){
    const m = height
    height=width
    width =m 
  }
} else { //Portrait
  if(width > height){
    const m = width
    width = height
    height = m
  }
}

const haupt_w = 2;
const haupt_h = 2;
const sub_h = 4;
const sub_w = 4;
const grid = pdfGrid.grid({
  dim: { h: height, w: width },
  cells: { h: haupt_h, w: haupt_w },
  unit: "cm",
  subCells: { h: sub_h, w: sub_w },
  verbose: true, 
  border_h:border_h,
  border_w:border_w 
});
for (let c_h=0; c_h < haupt_h; c_h++) {
  for (let c_w=0; c_w < haupt_w; c_w++) {
    for (let s_h=0; s_h < sub_h; s_h++) {
      for (let s_w=0; s_w < sub_w; s_w++) {
        const pos = pdfGrid.get_pos(grid, c_h, c_w, s_h, s_w);
        //write in the first line of the second quadrant
        const pos_string =
          c_h.toString() +
          " " +
          c_w.toString() +
          " " +
          s_h.toString() +
          " " +
          s_w.toString();
          doc.text(pos_string + "#", pos.pos_w, pos.pos_h);
      }
    }
  }
}

doc.save("output/simple.pdf");
