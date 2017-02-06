'use strict';

/**
 * Program that generates a Sierpinski triangle based on Pascal's
 * triangle.
*/

var PascalSierpinski = function(lines) {
  this.lines = lines;
}

PascalSierpinski.prototype.genPascal = function() {
  var l = this.pascalLines(this.lines);
  for (var i = 0; i < l.length; i++) {
    var row = $("<div></div>").addClass('row-' + i);
    for (var j = 0; j < l[i].length; j++) {
      var cell = $("<div></div>").text(l[i][j]);
      cell.mouseenter(function(e) {
        $("#numDisplay").text(e.target.innerHTML);
      });
      (l[i][j] % 2 === 0) ? cell.css('background', 'blue') : cell.css('background', 'red');
      $(row).append(cell);
      console.log(l[i][j]);
    }
    $("body").append(row);
    console.log('\n');
  }
}

PascalSierpinski.prototype.pascalLines = function(n) {
  if (n < 1) return false;
  this.triangle = new Array();
  for (var r = 0; r < this.lines; r++) {
    this.triangle[r] = new Array();
    for (var i = 0; i <= r; i++) {
      if (i == 0 || i == r)
        this.triangle[r][i] = 1;
      else
        this.triangle[r][i] = this.triangle[r-1][i-1]+this.triangle[r-1][i];
    }
  }
  return this.triangle;
}

var ps = new PascalSierpinski(32);
ps.genPascal();
