import { generateMenuTeaserDOM } from '../menu-teaser/menu-teaser.js';

export function generateMenuFlyoutLink(props) {
  const [menuflyoutText] = props;
  const menuFlyoutLinkDOM = document.createRange().createContextualFragment(`
    <span id="${menuflyoutText.textContent}" class="${menuflyoutText.textContent} menu-flyout-link">
      ${menuflyoutText.textContent}
    </span>
    <div class="menu-flyout-container"></div>
    <div class="menu-link-list-container"></div>
  `);
  return menuFlyoutLinkDOM;
}

export default function decorate(block) {
  const props = [...block.children].map((row) => row.firstElementChild);
  const panels = [...block.children];
  const menuFlyoutLinkDOM = generateMenuFlyoutLink(props);
  block.textContent = '';
  block.append(menuFlyoutLinkDOM);
  // for menu teaser inside menu flyout component
  const menuTeaserDom = document.createElement('div');
  menuTeaserDom.classList.add('menu-teaser-container');
  // for lint list inside flyout component
  const menuLinkListDOM = document.createElement('div');
  menuLinkListDOM.classList.add('menu-link-list-container1');

  panels.forEach((panel) => {
    const [tesaserimage, ...rest] = panel.children;
    const tesaserDom = generateMenuTeaserDOM([tesaserimage, ...rest]);
    menuTeaserDom.append(tesaserDom);
    panel.textContent = '';
  });
  const menuFlyoutContainer = block.querySelector('.menu-flyout-container');
  const menuFlyoutLintListContainer = block.querySelector('.menu-link-list-container');
  if (menuFlyoutContainer || menuFlyoutLintListContainer) {
    menuFlyoutContainer.append(menuTeaserDom);
    menuFlyoutContainer.append(menuLinkListDOM);
  }
}
