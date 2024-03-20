export function generateTextImageDOM(props) {
  // Extract properties, always same order as in model, empty string if not set
  const [pictureContainer, textarea, imagePosition, showMeta, metaText] = props;
  const picture = pictureContainer.querySelector('picture');
  const showMetaText = ${showMeta ? showMeta.innerHTML : false};

  // Build DOM
  const textImageDOM = document.createRange().createContextualFragment(`
    <div style="height: 350px; background-color: gray;">
        <div class='background' style='float:${imagePosition.innerHTML}'>${picture ? picture.outerHTML : ''}</div>
        <div class='foreground'>
          <div class='text'>
            <div class='textarea'>${textarea.innerHTML}</div>
            <div class='display:${showMetaText ? 'block' : 'none'}'>
                <p>${metaText.innerHTML}</p>
            </div>
          </div>
          <div class='spacer'>
          </div>
        </div>
    </div>
  `);

  // add final teaser DOM and classes if used as child component
  return textImageDOM;
}

export default function decorate(block) {
  // get the first and only cell from each row
  const props = [...block.children].map((row) => row.firstElementChild);
  const textImageDOM = generateTextImageDOM(props);
  block.textContent = '';
  block.append(textImageDOM);
}
