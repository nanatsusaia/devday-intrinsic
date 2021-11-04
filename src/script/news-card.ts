import news from './data.json';

class NewsCard {
  constructor() {
    if (!('content' in document.createElement('template'))) {
      throw new Error('Browser not supports HTML <template>');
    };

    news.data.forEach(newsData => this.create(newsData));
    news.data.forEach(newsData => this.create(newsData));
    news.data.forEach(newsData => this.create(newsData));
    news.data.forEach(newsData => this.create(newsData));
    news.data.forEach(newsData => this.create(newsData));
  }

  create(newsData) {
    const template = <HTMLTemplateElement>document.querySelector('#news-card-template');
    const image = <HTMLImageElement>template.content.querySelector('.news-card__image');
    const imageSource = <HTMLImageElement>document.querySelector(`#${newsData.id}-img`);
    const source = template.content.querySelector('.news-card__source');
    const date = <HTMLTimeElement>template.content.querySelector('.news-card__date');
    const title = template.content.querySelector('.news-card__title');
    const text = template.content.querySelector('.news-card__text');
    const action = template.content.querySelector('.news-card__action');
    const readMore = action.querySelector('.button');

    image.src = imageSource?.src ?? newsData.image.src;
    image.alt = newsData.image.alt;
    source.innerHTML = newsData.source;
    date.dateTime = newsData.date;
    date.innerHTML = newsData.date;
    title.innerHTML = newsData.title;
    text.innerHTML = newsData.text;
    readMore.classList.toggle('hidden', !newsData.readMore);

    const clone = document.importNode(template.content, true);
    template.parentNode.appendChild(clone);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const newsC = new NewsCard();
})