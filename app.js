var silly = true;
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

function generateButton(e) {
  var selector = document.getElementById('selected-class');
  var klass = selector.options[selector.selectedIndex].value;
  var draw = generate_draw(klass);

  clearDisplay();
  var display = document.getElementById('displayed-draw');

  for (var i = 0; i < draw.length; i++) {
    var node = makeNode(draw[i]);
    display.appendChild(node);

  }
}

function makeNode(point) {
  var e = document.createElement('img');
  if (silly) {
    e.src = 'resources/lols/' + point + '.png';
  } else {
    e.src = 'resources/' + point + '.png';
  }
  e.style="width: 160px;";
  return e;
}

function clearDisplay() {
  var display = document.getElementById('displayed-draw');
  for (;display.children.length > 0;) {
    display.removeChild(display.children[0]);
  }
}

window.onload = function() {
  document.getElementById('generate-button').addEventListener('click', generateButton);
  generateButton(null);
}
