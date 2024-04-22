import { generateMenuTeaserDOM } from '../menu-teaser/menu-teaser.js';

export default function decorate(block) {
  const panelContainer = document.createElement('div');
  panelContainer.classList.add('menu-teaser-container');

  // get all children elements
  const panels = [...block.children];

  // loop through all children blocks
  [...panels].forEach((panel) => {
    // generate the  panel
    const [tesaserimage, ...rest] = panel.children;
    const classesText = tesaserimage.textContent.trim();
    const tesaserDom = generateMenuTeaserDOM([tesaserimage, ...rest]);
    panel.textContent = '';
    panel.classList.add('menuteaser', 'block', classesText || 'empty');
    panel.append(tesaserDom);
    panelContainer.append(panel);
  });
  block.textContent = '';
  block.append(panelContainer);
}
