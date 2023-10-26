import {SiGmail,SiInstagram,SiGithub,SiLinkedin} from "react-icons/si"


const SocialMedia = () => {
    return (
        <div className='mt-5 text-center d-flex justify-content-center'>
            <div className="fs-3 d-flex gap-2 mb-5" >
            <a href="https://www.linkedin.com/in/othmane-aghbal-2150141b0/" target="_blank"><span><SiLinkedin className='text-black' /></span></a>
            <a href="https://github.com/OthmaneAGHBAL" target="_blank"><span><SiGithub className='text-black' /></span></a>
            <a href="mailto:aghbal.othmane9@gmail.com" ><span><SiGmail className='text-black' /></span></a>
            <a href="https://www.instagram.com/othmane_aghbal/" target="_blank"><span><SiInstagram className='text-black' /></span></a>
            </div>
        </div>
    )
  }
  
  export default SocialMedia