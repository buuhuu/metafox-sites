export function generateIFrameDOM(props) {
  // Extract properties, always same order as in model, empty string if not set
  const [iFrameUrl] = props;
  // const picture = pictureContainer.querySelector('picture');
  // Build DOM
  const iFrameDOM = document.createRange().createContextualFragment(`
    <div class="iframe-container">
    <iframe src="${iFrameUrl.textContent}" style="border:1px solid black;" id="bmwIframe">
    </iframe>
    <div class="loader"></div>
    
    </div>
  `);
  return iFrameDOM;
}
const iframe = document.getElementById('bmwIframe');
const loading = document.querySelector('.loader');

iframe.addEventListener('load', () => {
  loading.style.display = 'none';

  iframe.style.opacity = 1;
});
export default function decorate(block) {
  // get the first and only cell from each row
  const props = [...block.children].map((row) => row.firstElementChild);
  const iFrameDOM = generateIFrameDOM(props);
  block.textContent = '';
  block.append(iFrameDOM);
}
