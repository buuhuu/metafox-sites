export function generateMenuTeaserDOM(props) {
  const [menuTeaserImage] = props;
  const menuteaserDOM = document.createRange().createContextualFragment(`
      <div class="menu-teaser">${menuTeaserImage.textContent}
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
