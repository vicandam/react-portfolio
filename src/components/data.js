import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];

export const projects = [
  {
    id: 1,
    title: "Ransomware",
    description:
      "Ransomware methods continue to evolve and multiply, with tactics, techniques, and procedures (TTPs) changing constantly. Recorded Future proactively keeps tabs on these trends, providing intelligence to help you proactively detect, hunt, and monitor ransomware attacks.",
    image:
      "https://cms.recordedfuture.com/uploads/product_threats_ransomware_header_f3e3ea6261.jpg",
  },
  {
    id: 2,
    title: "State-Sponsored Attacks",
    description:
      "State-sponsored cyber actors aggressively target networks in order to conduct espionage and compromise, steal, alter, or destroy information. These actors go to great lengths to remain undetected. Intelligence brings them out of the shadows, providing insight into who they are, how they operate, and how they can be stopped.",
    image:
      "https://cms.recordedfuture.com/uploads/platform_threats_state_sponsored_bc5ba64140.jpg?w=1920",
  },
  {
    id: 3,
    title: "Phishing",
    description:
      "Millions of phishing emails are sent every day, targeting your employees and customers. Human error opens the door for attackers to gain network access, and move freely while exfiltrating critical data. Intelligence helps you track phishing campaigns, and the infrastructure used to deliver malware, allowing you to accelerate your investigations and defend against future attacks.",
    image:
      "https://cms.recordedfuture.com/uploads/platform_threats_phishing_75e06a3d2f.jpg?w=1920",
  },
];

export const stack = [
  {
    id: 1,
    title: "html",
  },
  {
    id: 2,
    title: "css",
  },
  {
    id: 3,
    title: "javascript",
  },
  {
    id: 4,
    title: "react.js",
  },
  {
    id: 5,
    title: "node.js",
  },
  {
    id: 6,
    title: "gatsby.js",
  },
];
