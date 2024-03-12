export function generateIFrameDOM(props) {
  // Extract properties, always same order as in model, empty string if not set
  const [iFrameUrl, iframeHeight, iframeWidth] = props;
  // const picture = pictureContainer.querySelector('picture');
  // Build DOM
  const iFrameDOM = document.createRange().createContextualFragment(`
    <div>
    <iframe src="${iFrameUrl.textContent}" width="${iframeWidth.innerHTML}" height="${iframeHeight.innerHTML}" style="border:1px solid black;">
    </iframe>
    
    </div>
  `);
  return iFrameDOM;
}

export default function decorate(block) {
  // get the first and only cell from each row
  const props = [...block.children].map((row) => row.firstElementChild);
  const iFrameDOM = generateIFrameDOM(props);
  block.textContent = '';
  block.append(iFrameDOM);
}
