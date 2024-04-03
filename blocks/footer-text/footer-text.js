export function generateFooterTextDom(props) {
    // Extract properties, always same order as in model, empty string if not set
    const [pictureContainer, text, link] = props;
    const picture = pictureContainer.querySelector('picture');
    const image = picture.querySelector('image');
  
    // Build DOM
    const footerTextDom = document.createRange().createContextualFragment(`
      <div style="height: 350px; background-color: red;">
          <div class='foreground'>
            <div class='text'>
              <div class='list-item'>${text.innerHTML}</div>
              <div class='list-link'>${link.innerHTML}</div>
            </div>
          </div>
      </div>
    `);
  
    // add final teaser DOM and classes if used as child component
    return footerTextDom;
  }
  
  export default function decorate(block) {
    debugger
    // get the first and only cell from each row
    const props = [...block.children].map((row) => row.firstElementChild);
    const footerTextDom = generateFooterTextDom(props);
    block.textContent = '';
    block.append(footerTextDom);
  }
  