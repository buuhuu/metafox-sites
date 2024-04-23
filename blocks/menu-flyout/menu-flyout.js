import { generateMenuTeaserDOM } from '../menu-teaser/menu-teaser.js';
import { genreateHeaderLinkList } from '../link-list/link-list.js';

export function generateMenuFlyoutLink(props) {
  const [menuflyoutText] = props;
  const menuFlyoutLinkDOM = document.createRange().createContextualFragment(`
    <span id="${menuflyoutText.textContent}"
     class="${menuflyoutText.textContent} menu-flyout-link">
      ${menuflyoutText.textContent}
    </span>
  `);
  return menuFlyoutLinkDOM;
}

export default function decorate(block) {
  const panels = [...block.children];
  const menuProps = [...block.children].map((row) => row.firstElementChild);
  const menuFlyoutLinkDOM = generateMenuFlyoutLink(menuProps);
  const menuTeaserDom = document.createElement('div');
  menuTeaserDom.classList.add('menu-teaser-container');
  block.textContent = '';
  block.append(menuFlyoutLinkDOM);
  [...panels].forEach((panel) => {
    const [field1, field2, field3, field4] = panel.children;
    console.log(field1);
    console.log(field2);
    console.log(field3);
    console.log(field4);
    const classesText = field2?.textContent.trim();
    const classes = (classesText ? classesText.split(',') : []).map((c) => c && c.trim()).filter((c) => !!c);
    if ([...classes].includes('menu-teaser')) {
      const props = [...panel.children].map((row) => row.firstElementChild);
      panel.textContent = '';
      block.append(generateMenuTeaserDOM(props));
    }
  });

  [...panels].forEach((panel) => {
    const [field1, field2, field3, field4] = panel.children;
    console.log(field1);
    console.log(field2);
    console.log(field3);
    console.log(field4);
    const classesText = field4?.textContent.trim();
    const classes = (classesText ? classesText.split(',') : []).map((c) => c && c.trim()).filter((c) => !!c);
    if ([...classes].includes('link-list')) {
      const props = [...panel.children].map((row) => row.firstElementChild);
      panel.textContent = '';
      // block.append(generateLinkListDom(props));
      block.append(genreateHeaderLinkList(props));
    }
  });
}
