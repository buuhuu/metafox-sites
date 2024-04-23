export function generateMenuTeaserDOM(props) {
  const [menuTeaserImage, copyText, linkLabel, linkURL] = props;
  console.log(menuTeaserImage.getElementsByTagName('img')[0]);
  const menuteaserDOM = document.createRange().createContextualFragment(`
      <div class="flyout-menu-teaser">
        <div class="menu-teaser__image">
          ${menuTeaserImage ? menuTeaserImage.outerHTML : ''}
        </div>
        <div class="copy-Text">${copyText.textContent}
        </div>
        <div class="link-label">
        <a class="link-url" aria-label="${linkLabel.textContent}" href="${linkURL.textContent}">
        ${linkLabel.textContent}
        </a>
        </div>
       </div>
    `);
  return menuteaserDOM;
}

export default function decorate(block) {
  const props = [...block.children].map((row) => row.firstElementChild);
  const menuteaserDOM = generateMenuTeaserDOM(props);
  block.textContent = '';
  block.append(menuteaserDOM);
}
