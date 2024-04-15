function generateCardDom(priceList) {
  const ul = document.createElement('ul');
  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'cards';
  priceList.forEach((ele) => {
    const li = document.createElement('li');
    li.className = 'cards-card-body';
    const divName = document.createElement('div');
    divName.classList = 'model-name';
    const divPrice = document.createElement('div');
    divPrice.className = 'model-price';
    const img = document.createElement('img');
    img.src = ele.ImageUrl;
    img.alt = 'Car Image';
    img.classList = 'cards-card-image';
    divName.append(ele.Model);
    divPrice.innerHTML = '<span>&#8364 </span>';
    divPrice.append(ele.Price);
    li.append(img);
    li.append(divName);
    li.append(divPrice);
    ul.append(li);
  });
  wrapperDiv.append(ul);
  return wrapperDiv;
}

function fetchPriceList() {
  const baseUrl = window.location.origin;

  return fetch(`${baseUrl}/index/table.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Fetch error:', error);
      throw error;
    });
}

export default function decorate(block) {
  fetchPriceList()
    .then((data) => {
      const cardDom = generateCardDom(data.data);
      block.textContent = '';
      block.append(cardDom);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Error fetching price list:', error);
    });
}
