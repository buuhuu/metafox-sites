export function generateMenuTeaserDOM(props) {
  // Extract properties, always same order as in model, empty string if not set
  const [menuTeaserImage, altText, richtext, LinkLabel, LinkTitle, Link, LinkType] = props;
  //   const picture = pictureContainer.querySelector('picture');
  //   const image = picture.querySelector('image');
  //   if (Boolean(image) && Boolean(altText)) {
  //     image.alt = altText;
  //   }

  // Build DOM
  const menuteaserDOM = document.createRange().createContextualFragment(`
      <div>
          ${menuTeaserImage},
           ${altText}, 
           ${richtext}, 
           ${LinkLabel.textContent}, ${LinkTitle.textContent}, ${Link.altText}, ${LinkType.textContent}
      </div>
    `);

  // add final teaser DOM and classes if used as child component
  return menuteaserDOM;
}

export default function decorate(block) {
  // get the first and only cell from each row
  const props = [...block.children].map((row) => row.firstElementChild);
  const menuteaserDOM = generateMenuTeaserDOM(props);
  block.textContent = '';
  block.append(menuteaserDOM);
}
