document.addEventListener('DOMContentLoaded', () => {
	const main = document.getElementsByTagName('main')[0];
	const urlParams = new URLSearchParams(window.location.search);
	if(urlParams.has('cake')) {
		const cake = cakes[urlParams.get('cake')];
		main.className = 'cake';
		main.innerHTML = `
			<h2 class="name">${cake.name}</h2>
			<div class="slider">${cake.images.map((image, i) => `<img src="images/${image}" onclick="this.scrollIntoView({behavior: 'smooth', inline: 'center'})"${i === 0 ? '' : ' class="margin"'}>`).join('')}</div>
			<p class="desc">${cake.desc}</p>
			<p class="price">Cena: ${cake.price}</p>
		`;
	} else {
		main.className = 'tiles';
		main.innerHTML += cakes.map((cake, i) => `<a class="tile" href="index.html?cake=${i}">
			<img src="images/${cake.images[0]}">
			<p class="name">${cake.name}</p>
			<p class="price">${cake.price}</p>
		</a>`).join('');
	}
});