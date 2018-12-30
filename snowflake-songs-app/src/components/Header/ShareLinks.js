import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';

import PinterestImg from './../../img/snowflakes-home.PNG';

const shareText = "The best New Year songs as Snowflakes! ❄❄❄";


const ShareLinks = () => {
	const currentUrl = window.location.hostname;
	const shareImage = currentUrl + PinterestImg;
	
	console.log("http://pinterest.com/pin/create/button/?url=" +currentUrl + "description=" + shareText + "media=" + shareImage)
	return (
		<div className="socialfloat">
	    	<a key="facebook"
	    		className="button facebook"
	    		href= {`http://www.facebook.com/sharer/sharer.php?u=${currentUrl}` }>
	            <FontAwesomeIcon icon={faFacebookF} size="lg" />
	        </a>

	      	<a key="twitter"
	      		className="button twitter" 
	      		href={ `https://twitter.com/intent/tweet?text=${shareText}&url=${currentUrl}`}>
	            <FontAwesomeIcon icon={faTwitter} size="lg" />
	        </a>
	        
	        <a key="pinterest"
	        	className="button pinterest" 
	        	href={ `http://pinterest.com/pin/create/button/?url=${currentUrl}&description=${shareText}&media=${shareImage}`}>
	            <FontAwesomeIcon icon={faPinterest} size="lg" />
	        </a>
	        
	        <a key="linkedin"
	        	className="button linkedin" 
	        	href={ `http://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${shareText}&source=${shareImage}` }>
	           <FontAwesomeIcon icon={faLinkedin} size="lg" />
	        </a>
	    </div>
	);
};

export default ShareLinks;