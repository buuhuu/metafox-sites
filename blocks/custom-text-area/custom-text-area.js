function generateTextAreaDom(props) {
  const [text, fontStyle, fontFamily] = props;
  const selectedFontStyle = fontStyle.innerText.split(",");
  const dom = document.createRange().createContextualFragment(`
        <div style='font-weight:${
          selectedFontStyle.includes("bold") ? "bold" : "none"
        };
            font-style:${
              selectedFontStyle.includes("italic") ? "italic" : "none"
            };
            font-family:${fontFamily.innerText}'>
            ${text.innerHTML}
        </div>
    `);

  return dom;
}

function generateCardDom(priceList) {
  const ul = document.createElement("ul");
  const wrapperDiv = document.createElement("div");
  wrapperDiv.className = "cards";
  priceList.forEach((ele) => {
    const li = document.createElement("li");
    li.className = "cards-card-body";
    const divName = document.createElement("div");
    divName.classList = "model-name";
    const divPrice = document.createElement("div");
    divPrice.className = "model-price";
    const img = document.createElement("img");
    img.src = ele.ImageUrl;
    img.alt = "Car Image";
    img.classList = "cards-card-image";
    divName.append(ele.Model);
    divPrice.innerHTML = `<span>&#8364 </span>`;
    divPrice.append(ele.Price);
    li.append(img);
    li.append(divName);
    li.append(divPrice);
    ul.append(li);
  });
  wrapperDiv.append(ul);
  return wrapperDiv;
}

export default function decorate(block) {
  const props = [...block.children].map((row) => row.firstElementChild);
  const textAreaDom = generateTextAreaDom(props);
  block.textContent = "";
  block.append(textAreaDom);
  const priceList = fetchPriceList();
  priceList.then((res) => {
    return res.json()
  }).then(data => {
    const cardDom = generateCardDom(data.data);
    block.append(cardDom);
  });
}

function fetchPriceList() {
 try{
  const baseUrl = window.location.origin;
  return fetch(`${baseUrl}/index/price-list.json`);
 } catch(err) {
    console.log(err)
 }
}
