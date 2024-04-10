export function generateVideoScript() {
  // Build DOM
  const videoScriptDOM = document.createRange().createContextualFragment(`
  <script type="application/ld+json">
  {
"contentUrl" : https://bmw.scene7.com/is/content/BMW/neue-klasse-x_joy_psf-AVS.m3u8,
"uploadDate" : "Wed Mar 13 2024 16:26:15",
"@type" : "VideoObject",
"name" : "BMW Vision Neue Klasse X Video",
"description" : "BMW Vision Neue Klasse X Video",
"publisher" : {
"@type" : "Organization",
"logo" : {
"@type" : "ImageObject"
}
},
"@context" : https://schema.org,
"thumbnailUrl" : https://bmw.scene7.com/is/image/BMW/neue-klasse-x_joy_fb?qlt=80&wid=1024&fmt=webp
}
</script>
  `);
  return videoScriptDOM;
}
export default function decorate(block) {
  // get the first and only cell from each row
  const props = [...block.children].map((row) => row.firstElementChild);
  const videoScriptDOM = generateVideoScript(props);
  block.textContent = '';
  block.append(videoScriptDOM);
}
