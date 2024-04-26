export function generateTextImageDOM(props) {
  // Extract properties, always same order as in model, empty string if not set
  const [pictureContainer, altText, textarea, summary] = props;
  const picture = pictureContainer.querySelector('picture');
  const image = picture.querySelector('image');
  if (Boolean(image) && Boolean(altText)) {
    image.alt = altText;
  }

  // Build DOM
  const textImageDOM = document.createElement('div');

  const backgroundContainer = document.createElement('div');
  backgroundContainer.classList.add('bg');
  if (picture) {
    backgroundContainer.append(picture);
  }
  textImageDOM.append(backgroundContainer);

  const foregroundContainer = document.createElement('div');
  foregroundContainer.classList.add('fg');
  foregroundContainer.text = summary.text;
  const textContainer = document.createElement('div');
  textContainer.textContent = textarea.textContent;
  foregroundContainer.append(textContainer);
  textImageDOM.append(foregroundContainer);

  // Add final teaser DOM and classes if used as child component
  return textImageDOM;
}

export default function decorate(block) {
  const [bg, fg] = block.children;
  bg.className = 'bg';
  fg.className = 'fg';
}
