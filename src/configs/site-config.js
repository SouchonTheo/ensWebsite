import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Théo Souchon. All Rights Reserved.`,
  author: {
    name: "Théo Souchon",
    accounts: [
      {
        url: "https://github.com/SouchonTheo",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/Theo_Souchon",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/souchontheo",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://www.linkedin.com/in/th%C3%A9o-souchon",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:souchontheo24@gmail.com",
        label: "Mail Theo",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
