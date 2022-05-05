import React from 'react';
import { AiFillInstagram, AiOutlineGithub, AiOutlineTwitter} from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022  Headphones All rights reserverd</p>
      <p className="icons">
        <Link href="https://github.com/tanmay630">
        <AiOutlineGithub/>
        </Link>
        <Link href="https://twitter.com/TanmaySinghKush" >
        <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  )
}

export default Footer