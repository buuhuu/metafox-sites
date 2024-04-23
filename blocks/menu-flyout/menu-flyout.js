// import { generateMenuTeaserDOM } from '../menu-teaser/menu-teaser.js';

// export function generateMenuFlyoutLink(props) {
//   const [menuflyoutText] = props;
//   const menuFlyoutLinkDOM = document.createRange().createContextualFragment(`
//     <span id="${menuflyoutText.textContent}"
// class="${menuflyoutText.textContent} menu-flyout-link">
//       ${menuflyoutText.textContent}
//     </span>
//     <div class="menu-flyout-container"></div>
//     <div class="menu-link-list-container"></div>
//   `);
//   return menuFlyoutLinkDOM;
// }

// export default function decorate(block) {
//   const props = [...block.children].map((row) => row.firstElementChild);
//   const panels = [...block.children];
//   const menuFlyoutLinkDOM = generateMenuFlyoutLink(props);
//   panels.forEach((panel) => {
//     const [tesaserimage, ...rest] = panel.children;
//     const tesaserDom = generateMenuTeaserDOM([tesaserimage, ...rest]);
//     panel.textContent = '';
//     panel.append(tesaserDom);
//     menuFlyoutLinkDOM.append(panel);
//   });
//   block.textContent = '';
//   block.append(menuFlyoutLinkDOM);
// }
