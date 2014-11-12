var capabilities = require('env.capabilities');

exports.NS = 'http://www.w3.org/2000/svg';
exports.LINK = 'http://www.w3.org/1999/xlink';

/**
 * Inject svg symbol definitions into the DOM
 * @param {String} id
 * @param {String} defs
 */
exports.injectDefs = function (id, defs) {
	if (capabilities.hasSVG() && !document.getElementById(id)) {
		var el = document.createElement('div')
			, svg = '<svg id="'
					+ id
					+ '" style="display:none;">'
					+ defs
					+ '</svg>';

		el.innerHTML = svg;
		document.body.insertBefore(el.firstChild, document.body.firstChild);
	}
};

/**
 * Append svg element of 'type' to 'parent', setting 'attrs'
 * @parama {DOMElement} parent
 * @parama {String} type
 * @parama {Object} attrs
 */
exports.appendChild = function (parent, type, attrs) {
	var el = document.createElementNS(exports.NS, type);

	if (attrs) {
		for (var attr in attrs) {
			if (attr.indexOf('xlink:') == 0) {
				el.setAttributeNS(exports.LINK, attr.substring(6), attrs[attr]);
			} else {
				el.setAttribute(attr, attrs[attr]);
			}
		}
	}

	parent.appendChild(el);
};