export function generateVideoSlideDom(props) {
  // Extract properties, always same order as in model, empty string if not set
  // const [iconType, altText, iconLink] = props;
  // let iconPath;
  // let iconDom;
  // if (iconListArray.includes(iconType.textContent)) {
  //   // Build DOM
  //   iconDom = document.createRange().createContextualFragment(`
  //     <a class="icon-container" href="${iconLink.textContent}" alt="${altText.textContent}">
  //       <span class="${iconType.textContent}"></span>
  //     </a>`);
  // } else {
  //   iconPath = iconList[iconType.textContent];
  //   // Build DOM
  //   iconDom = document.createRange().createContextualFragment(`
  //   <a class="icon-container" href="${iconLink.textContent}">
  //   <img src="${iconPath}" alt="${altText.textContent}"/>
  //   </a>`);
  // }

  //return iconDom;
}

export default function decorate(block) {
  // get the first and only cell from each row
  const props = [...block.children].map((row) => row.firstElementChild);
  const videoSlideDom = generateVideoSlideDom(props);
  block.textContent = '';
  block.append(videoSlideDom);
}
  