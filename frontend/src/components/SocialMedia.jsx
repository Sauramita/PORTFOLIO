
import React from 'react';
import { BsLinkedin , BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/sauramita-reang-b140b1206/">  < BsLinkedin /></a>
    
    </div>
    <div>
    <a href="https://www.facebook.com/profile.php?id=100068641597183"><FaFacebookF /></a>
    </div>
    <div>
    <a href="https://instagram.com/soro__666?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"> <BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;