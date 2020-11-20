const navEl = document.getElementById('nav-container-list');
const menuItems = [
	{
		url: '#top-anchor',
		title: 'Acasa',
	},
	{
		url: '#divider-services',
		title: 'Servicii',
	},
	{
		url: '#divider-about',
		title: 'Despre',
	},
	{
		url: '#prices-divider',
		title: 'Tarife',
	},
	{
		url: '#newsletter-divider',
		title: 'Contact',
	}
];

menuItems.forEach(function (item) {
	if (item && item.url && item.url.length > 0) {
		if (item.url.indexOf('#') === 0) {
			const el = document.createElement('div');
			el.classList.add('nav-container-list-item');
			el.innerHTML = '<a href="' + window.location.href + item.url + '">' + item.title + '</a>';
			navEl.append(el);
		} else {
			const el = document.createElement('div');
			el.classList.add('nav-container-list-item');
			el.setAttribute('onclick', 'openLink(\'' + item.url + '\')');
			el.innerHTML = '<span>' + item.title + '</span>';
			navEl.append(el);
		}
	}
});
function openLink(url) {

}
