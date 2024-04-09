export function generateLogoDOM(props) {
  const [image, alt, link] = props;
  image.getElementsByTagName('img')[0].alt = alt.textContent;
  const logoDOM = document.createRange().createContextualFragment(`
     <a href="${link.textContent}" title="${alt.textContent}">
        ${image ? image.outerHTML : ''}
     </a>
    `);
  return logoDOM;
}

export default function decorate(block) {
  const props = [...block.children].map((row) => row.firstElementChild);
  const logoDOM = generateLogoDOM(props);
  block.textContent = '';
  block.append(logoDOM);
}
