// Central icon map so data files can reference icons by string key.
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaLinkedin, FaPhp, FaWordpress, FaBootstrap,
} from 'react-icons/fa6';
import {
  SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiWoo, SiPostman,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { HiOutlineMail } from 'react-icons/hi';

export const skillIcons = {
  html: FaHtml5,
  css: FaCss3Alt,
  js: FaJs,
  react: FaReact,
  node: FaNodeJs,
  express: SiExpress,
  mongo: SiMongodb,
  mysql: SiMysql,
  php: FaPhp,
  git: FaGitAlt,
  github: FaGithub,
  api: TbApi,
  bootstrap: FaBootstrap,
  tailwind: SiTailwindcss,
  wordpress: FaWordpress,
  woo: SiWoo,
  postman: SiPostman,
};

export const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: HiOutlineMail,
};
