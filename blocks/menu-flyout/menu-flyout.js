// import { generateMenuTeaserDOM } from '../menu-teaser/menu-teaser.js';
// import { generateLinkListDom } from '../link-list/link-list.js';

// export function generateMenuFlyoutLink(props) {
//   const [menuflyoutText] = props;
//   const menuFlyoutLinkDOM = document.createRange().createContextualFragment(`
//     <span id="${menuflyoutText.textContent}" 
//      class="${menuflyoutText.textContent} menu-flyout-link">
//       ${menuflyoutText.textContent}
//     </span>
//   `);
//   return menuFlyoutLinkDOM;
// }

// export default function decorate(block) {
//   const panels = [...block.children];
//   block.textContent = '';
//   [...panels].forEach((panel, index) => {
//     const [field1, classList, ...rest] = panel.children;
//     const classesText = classList.textContent.trim();
//     const classes = (classesText ? classesText.split(',')
//     : []).map((c) => c && c.trim()).filter((c) => !!c);
//     if ([...classes].includes('menu-teaser')) {
//       const props = [...panel.children].map((row) => row.firstElementChild);
//       // DOM
//       panel.textContent = '';
//       block.append(generateMenuTeaserDOM(props));
//     } else if ([...classes].includes('link-list')) {
//       const props = [...panel.children].map((row) => row.firstElementChild);
//       panel.textContent = '';
//       block.append(generateLinkListDom(props));
//     }
//   });
// }
