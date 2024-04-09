import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';

  // load footer fragment
  const footerPath = footerMeta.footer || '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  const footer = document.createElement('div');
  while (fragment.firstElementChild) {
    // if curent div has data attr radio then its footer section

    if (fragment.firstElementChild.hasAttribute('data-radio')) {
      if (fragment.firstElementChild.getAttribute('data-radio') === 'white') {
        fragment.firstElementChild.classList.add('footer-white-bg');
      } else if (fragment.firstElementChild.getAttribute('data-radio') === 'grey') {
        fragment.firstElementChild.classList.add('footer-grey-bg');
      }
    }
    footer.append(fragment.firstElementChild);
  }

  block.append(footer);
  function toggleClass(element) {
    if (element.classList.contains('title-expanded-mobile')) {
      element.classList.remove('title-expanded-mobile');
    } else {
      element.classList.add('title-expanded-mobile');
    }
  }
  const accordionHeaders = document.querySelectorAll('.vertical-link-text h3');
  accordionHeaders.forEach((header) => {
    header.addEventListener('click', (event) => {
      event.preventDefault();
      const listItem = header.nextElementSibling;
      toggleClass(header);
      if (listItem.style.display === 'none' || listItem.style.display === '') {
        listItem.style.display = 'block';
      } else {
        listItem.style.display = 'none';
      }
    });
  });

  // window.onload = function () {
  //   const copyRightText = document.querySelector('footer .horizontal-link-text strong').innerHTML;
  //   const copyRightyear = new Date();
  //   copyRightText.innerHTML = copyRightyear.getFullYear();
  // };
}
