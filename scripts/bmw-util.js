const alignClassList = { center: 'alignment-center', right: 'alignment-right', left: 'alignment-left' };

function getAlignmentStyle(element) {
  let alignClass = '';
  element.querySelectorAll('div.section-metadata').forEach((ele) => {
    alignClass = ele.innerText.split('\n');
  });
  return alignClass[1];
}

function setAlignmentStyle(style, element) {
  if (alignClassList.left === style) {
    element.classList.add('button-align-left');
  } else if (alignClassList.right === style) {
    element.classList.add('button-align-right');
  } else {
    element.classList.add('button-align-center');
  }
}

export function decorateBMWButtons(element) {
  element.querySelectorAll('a').forEach((a) => {
    a.title = a.title || a.textContent;
    if (a.href !== a.textContent) {
      const up = a.parentElement;
      const twoup = a.parentElement.parentElement;
      if (!a.querySelector('img')) {
        if (
          up.childNodes.length === 1 && (up.tagName === 'P' || up.tagName === 'DIV')
        ) {
          a.className = 'button ghost-dark button-fixed-width'; // default
          up.ariaLabel = up.textContent;
          twoup.classList.add('button-container');
          const alignment = getAlignmentStyle(element);
          setAlignmentStyle(alignment, twoup);
        }
        if (
          up.childNodes.length === 1 && up.tagName === 'STRONG' && twoup.childNodes.length === 1 && twoup.tagName === 'P'
        ) {
          a.className = 'button ghost-dark-flex button-flex-width';
          up.ariaLabel = up.textContent;
          twoup.classList.add('button-container');
          const alignment = getAlignmentStyle(element);
          setAlignmentStyle(alignment, twoup);
        }
        if (
          up.childNodes.length === 1 && up.tagName === 'EM' && twoup.childNodes.length === 1 && (twoup.tagName === 'P' || twoup.tagName === 'DIV')
        ) {
          a.className = 'button hyperlink';
          a.id = 'hyperlink-button';
          up.ariaLabel = up.textContent;
          const iconSpan = document.createElement('span');
          iconSpan.innerHTML = '<i class="icon-gt" aria-hidden="true" data-icon="arrow_chevron_right"></i>';
          iconSpan.classList = 'align-center';
          up.append(iconSpan);
          twoup.classList.add('button-container');
          up.classList.add('align-icon');
          const alignment = getAlignmentStyle(element);
          setAlignmentStyle(alignment, twoup);
        }
      }
    }
  });
}

export default decorateBMWButtons;
