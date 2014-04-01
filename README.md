SVG utility functions

## Usage

```javascript
var svg = require('svg')
  , elSVG = document.createElementNS(svg.NS, 'svg');

svg.injectDefs('svgDefs', '<symbol id="someSymbol">...</symbol>');

svg.appendChild(elSVG, 'use', {'xlink:href': '#someSymbol'});
```
