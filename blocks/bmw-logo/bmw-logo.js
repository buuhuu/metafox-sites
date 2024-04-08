export function generateLogoDOM(props) {
  const [image, alt, link] = props;
  const logoDOM = document.createRange().createContextualFragment(`
     <a href="${link.textContent}" alt="${alt}">
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
