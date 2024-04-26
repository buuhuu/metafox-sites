import { generateMenuTeaserDOM } from '../menu-teaser/menu-teaser.js';

export function generateMenuFlyoutLink(props) {
  const [menuflyoutText] = props;
  const menuFlyoutLinkDOM = document.createRange().createContextualFragment(`
    <span id="${menuflyoutText?.textContent}" class="${menuflyoutText?.textContent} menu-flyout-link">
      ${menuflyoutText?.textContent}
    </span>
  `);
  return menuFlyoutLinkDOM;
}

function genreateHeaderLinkList(props) {
  if (!props) return null;
  const menuteaserDOM = document.createRange().createContextualFragment(`
      <div class="flyout-link-list">     
        <div class ="link-list-wrapper vertical">
          <div class="link-list block" data-block-name="link-list" data-block-status="loaded">
            <h3 class="link-list-title">${props[1].textContent} </h3>
              <div class="link-list-detail">               
               ${props[2].outerHTML}
              </div>
        </div>
      </div>
    `);
  return menuteaserDOM;
}

export default function decorate(block) {
  const panels = [...block.children];
  const menuProps = [...block.children].map((row) => row.firstElementChild);
  const menuFlyoutLinkDOM = generateMenuFlyoutLink(menuProps);
  const wrapperDiv = document.createElement('div');
  wrapperDiv.classList.add('flyout-main-container');

  block.textContent = '';
  block.appendChild(menuFlyoutLinkDOM);
  [...panels].forEach((panel) => {
    const [, field2, , field4] = panel.children;
    // for linkList
    const linkListClassesText = field4?.textContent.trim();
    const linkListClasses = (linkListClassesText ? linkListClassesText.split(',') : []).map((c) => c && c.trim()).filter((c) => !!c);
    // for menuTease
    const menuTeaserClassesText = field2?.textContent.trim();
    const menuTeaserClasses = (menuTeaserClassesText ? menuTeaserClassesText.split(',') : []).map((c) => c && c.trim()).filter((c) => !!c);
    if ([...linkListClasses]?.includes('link-list')) {
      const props = [...panel.children].map((row) => row.firstElementChild);
      panel.textContent = '';
      wrapperDiv.appendChild(genreateHeaderLinkList(props));
    }
    if ([...menuTeaserClasses]?.includes('menu-teaser')) {
      const props = [...panel.children].map((row) => row.firstElementChild);
      panel.textContent = '';
      wrapperDiv.appendChild(generateMenuTeaserDOM(props));
    }
  });
  const flyoutWrapperDiv = document.createElement('div');
  flyoutWrapperDiv.classList.add('flyout-wrapper');

  flyoutWrapperDiv.appendChild(wrapperDiv);
  block.appendChild(flyoutWrapperDiv);
}
