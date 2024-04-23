import  { loadVideoEmbed } from "../video/video.js";
import { generateVideoDetailMarkUp } from "../video-slide/video-slide.js"
import { generateImgSlidePicture } from "../image-slide/image-slide.js";
import { generateImgSlideDetailMarkUp } from "../image-slide/image-slide.js";

export default function decorate(block) {
  const videoImageContainer = document.createElement('div');
  videoImageContainer.classList.add("video-image-slide-conatiner");

  const videoImageDetailsContainer = document.createElement('div');
  videoImageDetailsContainer.classList.add("video-image-detail-container");

  // get all children elements
  const panels = [...block.children];

  // loop through all children blocks
  [...panels].forEach((panel,index) => {
    const [classList] = panel.children;
    const classesText = classList.textContent.trim();
    const classes = (classesText ? classesText.split(',') : []).map((c) => c?.trim()).filter((c) => !!c);
    
    // checking which is current block children
    if([...classes].includes('video-slide')) {
      const [className,videoSlideTab1,videoSlideHeadline,videoSlideCopyText,videoSlideTab2,videoSlideTitle,videoSlideDescription,videoSlideDesktopVideoRef,
        videoSlideMobileVideoRef,videoSlideDesktopPosterImgRef,videoSlideMobilePosterImgRefaltText,videoSlideLoopVideo,videoSlideAutoplay,videoSlideTab3,videoSlideLinkLabel,
        videoSlideLink,videoSlideButtonStyling] = panel.children;

      const videoDOMContainer = document.createElement('div');
      videoDOMContainer.classList.add('video-image-slide','media');
      videoDOMContainer.classList.add('video-image-slide-'+index);
      if(index === 0){
        videoDOMContainer.classList.add("visible");
      }      

      const desktopVideoPosterImgPath = videoSlideDesktopPosterImgRef.querySelector('img').getAttribute('src');

      // generating video
      loadVideoEmbed(videoDOMContainer,videoSlideDesktopVideoRef.textContent.trim(),videoSlideAutoplay.textContent.trim(),videoSlideLoopVideo.textContent.trim(),false,true,desktopVideoPosterImgPath)

      //call function for generating video slide UI
      videoImageContainer.append(videoDOMContainer);

      //call function to generate video detail div
      videoImageDetailsContainer.append(generateVideoDetailMarkUp([videoSlideHeadline.textContent.trim(),videoSlideCopyText.innerHTML,videoSlideTitle.textContent.trim(),videoSlideDescription.textContent.trim(),videoSlideLinkLabel.textContent.trim(),videoSlideLink.textContent.trim(),videoSlideButtonStyling.textContent.trim(),index]));
      
    }
    //delete
    //else if([...classes].includes('image-slide')){
    else {
      const [imageSlideClassname,imageSlideTab1,imageSlideHeadline,imageSlideCopyText,imageSlideTab2,
        imageSlideImgRef,imageSlideAltText,imageSlideTab3,imageSlideLinkLabel,imageSlideLink,imageSlideButtonStyling] = panel.children;

        const imgDOMContainer = document.createElement('div');
        imgDOMContainer.classList.add('video-image-slide','media');
        imgDOMContainer.classList.add('video-image-slide-'+index);
        if(imageSlideClassname?.textContent) {
          imgDOMContainer.classList.add(imageSlideClassname.textContent);
        }

        //append picture to imgDomContainer div
        generateImgSlidePicture([imgDOMContainer,imageSlideImgRef,imageSlideAltText.textContent.trim()])     

        //call function for generating image slide UI
        videoImageContainer.append(imgDOMContainer);

        //call function for generating image slide details
        videoImageDetailsContainer.append(generateImgSlideDetailMarkUp([imageSlideHeadline.textContent.trim(),imageSlideCopyText.textContent.trim(),imageSlideLinkLabel.textContent.trim(),imageSlideLink.textContent.trim(),imageSlideButtonStyling.textContent.trim(),index]));
    }    
    panel.textContent = '';
  });
  block.textContent = ''; 
  block.append(videoImageContainer);
  block.append(videoImageDetailsContainer);
}
