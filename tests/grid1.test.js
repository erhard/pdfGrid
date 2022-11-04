import pdfGrid from "../index.js"
test('initialises a grid', () => {
    expect(pdfGrid.init()).toBeTruthy();
  });

test('initialises a grid', () => {
    const mockGrid = null
    const pdf_grid_A4 = pdfGrid.init({dim:{h:29.7,w:21.0}, cells:{h:2,w:2},unit:"cm"})
    expect(typeof pdf_grid_A4).toBe("object");
 });


test('define a sub grid checking offsets', () => {
    const pdf_grid_A4 = pdfGrid.init({dim:{h:29.7,w:21.0}, cells:{h:1,w:1},unit:"cm"})
    const pdf_sub = pdfGrid.sub_init({parent: pdf_grid_A4,counter_h:1,counter_w:0, cells:{h:1, w:2},border_h:1, border_w: 1, verbose: true})
    expect(pdf_sub[0][0].pos_h).toBeTruthy();
    expect(pdf_sub[0][0].pos_w).toBeTruthy();
  });



test('positioning on third in second row', ()=> {
    const grid = pdfGrid.grid({dim:{h:29.7,w:21.0}, cells:{h:2,w:2},unit:"cm", subCells: {h:6,w:4}})
    expect(typeof grid).toBe("object");
})


test('positioning on third in second row', ()=> {
    const grid = pdfGrid.grid({dim:{h:29.7,w:21.0}, cells:{h:2,w:2},unit:"cm", subCells: {h:6,w:4}})
    expect(typeof grid).toBe("object");
})


test('positioning one Single Line of text', ()=> {
    const grid = pdfGrid.grid({dim:{h:29.7,w:21.0}, cells:{h:2,w:2},unit:"cm", subCells: {h:6,w:4}})
    //Positioniere unten rechts in der 3 Zeile und lass eine Spalte frei
    const pos = pdfGrid.get_pos(grid, 1,1,3,1)
    expect(pos.pos_h).toBe(22.275);
    expect(pos.pos_w).toBe(13.125);
})