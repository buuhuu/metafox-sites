function toggleLinkListDetail(e) {
  const { target } = e;
  if (window.innerWidth < 768) {
    if (target.classList.contains('expand')) {
      target.nextSibling.style.maxHeight = null;
      target.classList.remove('expand');
    } else {
      target.nextSibling.style.maxHeight = `${target.nextSibling.scrollHeight}px`;
      target.classList.add('expand');
    }
  }
}

export default function decorate(block) {
  const props = [...block.children].map((row) => row.firstElementChild);
  const [linkListOrientation, linkListTitle, linkListDetail] = props;
  const orientationClassName = linkListOrientation.textContent || 'vertical';
  block.parentElement.classList.add(orientationClassName);
  const linkListTitleElem = document.createElement('h3');
  linkListTitleElem.classList.add('link-list-title');
  linkListTitleElem.textContent = linkListTitle.textContent;
  const linkListRTEElem = document.createElement('div');
  linkListRTEElem.classList.add('link-list-detail');
  linkListRTEElem.innerHTML = linkListDetail.innerHTML;

  block.textContent = '';
  block.append(linkListTitleElem);
  block.append(linkListRTEElem);
  // initiating click event for title
  const linkListTitleForEvent = block.querySelectorAll('.link-list-title');
  linkListTitleForEvent.forEach((title) => {
    title.addEventListener('click', toggleLinkListDetail);
  });
}
