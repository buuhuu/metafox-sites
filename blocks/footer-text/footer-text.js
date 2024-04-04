export function generateFooterTextDom(props) {
  // Extract properties, always same order as in model, empty string if not set
  const [text, link] = props;

  // Build DOM
  const footerTextDom = document.createRange().createContextualFragment(`
          <div class='footer-list-container'>
            <div class='footer-list'>
                <ul  class='list-item'>
                    <li class='list-link'><a href=${link.innerHTML}>${text.innerHTML}</a></li>
                </ul>
            </div>
          </div>
    `);

  // add final teaser DOM and classes if used as child component
  return footerTextDom;
}

export default function decorate(block) {
  // get the first and only cell from each row
  const props = [...block.children].map((row) => row.firstElementChild);
  const footerTextDom = generateFooterTextDom(props);
  block.textContent = '';
  block.append(footerTextDom);
}
