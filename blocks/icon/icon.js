const iconList = {
    'facebook': '/icons/facebook.png',
    'instagram':'/icons/instagram.png',
    'youtube': '/icons/youtube.png',
    'twitter':'/icons/X-Logo.png',
    'linkedin': '/icons/linkedin.png'
}

export function generateIconDOM(props, classes) {    
    // Extract properties, always same order as in model, empty string if not set
    const [iconType, altText, iconLink] = props;
    const iconPath = iconList[iconType.textContent];

    // Build DOM
    const iconDom = document.createRange().createContextualFragment(`
      <a class="icon-container" href="${iconLink.textContent}">
      <img src="${iconPath}" alt="${altText.textContent}"/>
      </a>`);

    return iconDom;
}

export default function decorate(block) {
    // get the first and only cell from each row
    const props = [...block.children].map((row) => row.firstElementChild);
    const iconDOM = generateIconDOM(props, block.classList);
    block.textContent = '';
    block.append(iconDOM);
}