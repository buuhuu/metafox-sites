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
  //   return [
  //     {
  //       "Sl. No.": "1",
  //       ImageUrl:
  //         "https://main--metafox-sites--bmw-importer.hlx.live/media_1653e03aa4c4ee96e47c14c8ea74bc8166a1f9b0e.jpeg",
  //       Model: "BMW iX",
  //       Price: "87,660",
  //     },
  //     {
  //       "Sl. No.": "2",
  //       ImageUrl:
  //         "https://main--metafox-sites--bmw-importer.hlx.live/media_1653e03aa4c4ee96e47c14c8ea74bc8166a1f9b0e.jpeg",
  //       Model: "BMW iX M60",
  //       Price: "146,850",
  //     },
  //     {
  //       "Sl. No.": "3",
  //       ImageUrl:
  //         "https://main--metafox-sites--bmw-importer.hlx.live/media_1653e03aa4c4ee96e47c14c8ea74bc8166a1f9b0e.jpeg",
  //       Model: "BMW i7",
  //       Price: "128,240",
  //     },
  //     {
  //       "Sl. No.": "4",
  //       ImageUrl:
  //         "https://main--metafox-sites--bmw-importer.hlx.live/media_1653e03aa4c4ee96e47c14c8ea74bc8166a1f9b0e.jpeg",
  //       Model: "BMW i7 M70 xDrive",
  //       Price: "176,600",
  //     },
  //   ];
  // $.get("http://localhost:3000/index/price-list",function(data) {
  //     console.log(data)
  // })
  return fetch(`${baseUrl}/index/price-list.json`);
  //     const list = response.json();
  //   console.log(list);
 } catch(err) {
    console.log(err)
 }
}
