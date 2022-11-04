
#  pdfGrid 

###  Description

pdfGrid is a universal grid lib for absolut positioning.
It is useful mainly for positioning on pdfs.


### Usage

A surface (paper) is devided into cells and a cell is devided in subcells
First You generate a grid with the cell and subcell dimensions.

Then you access the position with four coordinates.
After that you can place for example an image on a page  with jspdf.

For example the paper is defided into 4 quadrants.  Each quadrat can be access with a number.
In a quadrant there are 6 lines and 4 rows. 
so You can position with (1,1,2,3)  It goes in this case from (0,0,0,0) to (1,1,5,3) . It starts counting from zero. 

Its mainly useful in loops, so you do not have to calculate the position yourself, you simply use the counter.

It can be used in the browser or in node.

git it to see the example of positioning.

There are two steps : generate the grid and access the grid and get the position. 

