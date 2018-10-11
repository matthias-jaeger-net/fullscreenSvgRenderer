(function fullScreenSvgRenderer() {
	console.log('fullScreenSvgRenderer \n Version 1.0.0');

	let width = window.innerWidth;
	let height = window.innerHeight;

	let wrapper = document.createElement('div');
	document.body.appendChild(wrapper);

	let parts = [];
	let style = '';

	const point = (cx, cy) => {
		parts.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + 1 + '"  />');
	};

	const ellipse = (cx, cy, rx, ry) => {
		parts.push('<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" />');
	};

	const line = (x1, y1, x2, y2) => {
		parts.push('<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="black" />');
	};

	const createSvg = (width, height) => {
		let svg = '<svg viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg">';
		for (let part of parts) {
			svg += part;
		}
		svg += '</svg>';
		return svg;
	}

	const background = () => {
		parts = [];
	}

	const fill = (r, g, b) => {

	}

	let draw = () => {
		//background();
		let r1 = Math.floor(Math.random() * width);
		let r2 = Math.floor(Math.random() * height);
		let r3 = Math.floor(Math.random() * width);
		let r4 = Math.floor(Math.random() * height);

		fill(0, 0, 255);
		ellipse(r1, r2, 3, 3);
		ellipse(r3, r4, 3, 3);
		line(r1, r2, r3, r4);
	}

	setInterval(() => {
		draw();
		wrapper.innerHTML = createSvg(width, height)
	}, 100);
})();