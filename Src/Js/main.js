function carregar() { // máximo 6 projetos
    fetch("../../Src/Json/data.json")
        .then(response => response.json())
        .then(imgs => {
            const container = document.querySelector("#container");

            imgs.map(img => {
                const card = document.createElement("div");
                card.classList.add("card");

                const bannercard = document.createElement("div");
                bannercard.classList.add("bannercard");
                card.appendChild(bannercard);

                const content = document.createElement('div')
                content.classList.add('content')
                card.appendChild(content)

                const img1b = document.createElement('img');
                img1b.src = img.banner;
                bannercard.appendChild(img1b)

                const icon = document.createElement('div');
                icon.classList.add('icon');
                content.appendChild(icon);

                const img2i = document.createElement('img')
                img2i.src = img.icon;
                icon.appendChild(img2i);

                const text = document.createElement("div");
                text.classList.add('text');
                content.appendChild(text);

                //server name
                const h2 = document.createElement("h2");
                h2.textContent = img.name;
                text.appendChild(h2);

                //description
                const p = document.createElement("p");
                p.textContent = img.description;
                text.appendChild(p);

                //produto
                const h3 = document.createElement("h3");
                h3.textContent = img.type;
                text.appendChild(h3);

                container.appendChild(card);
            });
        }
    );
}

carregar();

const menuItems = document.querySelectorAll('.links nav a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 800;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time ** 4 + from;
    return -distance / 2 * ((time -= 2) * time ** 3 - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
};