function generate_draw(category) {
  var open = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e'];
  var advanced = ['a', 'a', 'b', 'b', 'c', 'c'];

  var selected, points, draw = [];
  if (category === 'open') {
    selected = open;
    points = 5;
  } else if (category === 'advanced') {
    selected = advanced;
    points = 4;
  } else {
    throw("What even is " + category);
  }

  for(;points > 0;points--) {
    var index = Math.floor(Math.random() * selected.length);
    draw.push(selected.splice(index, 1)[0]);
  }

  return draw;
}
