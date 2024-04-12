function generateTextAreaDom(props) {
  const [text, fontStyle, fontFamily, fontSize] = props;
  const selectedFontStyle = fontStyle.innerText.split(',');

  const dom = document.createRange().createContextualFragment(`
        <div class="text-area ${selectedFontStyle.includes('bold') ? 'bold' : ''} 
        ${selectedFontStyle.includes('italic') ? 'italic' : ''}"
             style="font-family: ${fontFamily.innerText}; font-size: ${fontSize}px;">
            ${text.innerHTML}
        </div>
    `);

  return dom;
}

export default function decorate(block) {
  const props = [...block.children].map((row) => row.firstElementChild);
  const textAreaDom = generateTextAreaDom(props);
  block.textContent = '';
  block.append(textAreaDom);
}
