export default function decorate(block) {
debugger;
  const panelContainer = document.createElement('div');
  panelContainer.classList.add('multigallery-content-container');
  // get all children elements
  const panels = [...block.children];

  // loop through all children blocks
  [...panels].forEach((panel) => {    
    const [classList,...rest] = panel.children;
    const classesText = classList.textContent.trim();
    const classes = (classesText ? classesText.split(',') : []).map((c) => c && c.trim()).filter((c) => !!c);
    let domElement;
    if([...classes].includes('video-slide')) {
        //call function for generating video slide UI
    }
    else if([...classes].includes('image-slide')){
        //call function for generating image slide UI
    }    
    
    panel.textContent = '';    
    panel.append(domElement);
    panelContainer.append(panel);
  });
  block.textContent = '';
  block.append(panelContainer);
}
