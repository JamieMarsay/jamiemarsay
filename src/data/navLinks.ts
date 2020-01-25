import linkedInIcon from "@Assets/linkedin.svg";
import githubIcon from "@Assets/github.svg";
import mediumIcon from "@Assets/medium.svg";

export interface ILink {
  icon: string;
  url: string;
  alt: string;
}

export const navLinks: ILink[] = [
  {
    url: "https://github.com/JamieMarsay",
    alt: "Github logo",
    icon: githubIcon
  },
  {
    url: "https://www.linkedin.com/in/jamie-marsay/",
    alt: "LinkedIn logo",
    icon: linkedInIcon
  },
  {
    url: "https://medium.com/@jamiemmarsay",
    alt: "Medium logo",
    icon: mediumIcon
  }
];
