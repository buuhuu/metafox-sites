export function generateFooterBG(props) {
  // Extract properties, always same order as in model, empty string if not set
  const [radio] = props;
  let footerBgClassName;
  if (radio.textContent.trim() === 'white') {
    footerBgClassName = 'footer-white-bg';
  } else if (radio.textContent.trim() === 'grey') {
    footerBgClassName = 'footer-grey-bg';
  }
  const footerBGDom = document.createRange().createContextualFragment(`<div class='${footerBgClassName}'></div>`);
  return footerBGDom;
}

export default function decorate(block) {
  // get the first and only cell from each row
  const props = [...block.children].map((row) => row.firstElementChild);
  const footerBGDom = generateFooterBG(props);
  block.textContent = '';
  block.append(footerBGDom);
}
