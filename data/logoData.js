import git from "../assets/img/logo-skillz/git.png";
import html5 from "../assets/img/logo-skillz/HTML5.svg";
import css from "../assets/img/logo-skillz/css3.svg";
import javascript from "../assets/img/logo-skillz/javascript-2.svg";
import tailwindcss from "../assets/img/logo-skillz/tailwindcss.svg";
import chakraUi from "../assets/img/logo-skillz/chakra.svg";
import react from "../assets/img/logo-skillz/react.svg";
import nextjs from "../assets/img/logo-skillz/nextjs.svg";
import redux from "../assets/img/logo-skillz/redux.svg";
import firebase from "../assets/img/logo-skillz/firebase.svg";

export const logoSkillz = [
  {
    titre: "html",
    image: html5,
    order: 8,
  },
  {
    titre: "CSS",
    image: css,
    order: 9,
  },
  {
    titre: "javascript",
    image: javascript,
    order: 7,
  },
  {
    titre: "tailwindcss",
    image: tailwindcss,
    order: 6,
  },
  {
    titre: "chakraUi",
    image: chakraUi,
    order: 5,
  },
  {
    titre: "react",
    image: react,
    label: "React",
    order: 1,
  },
  {
    titre: "nextjs",
    image: nextjs,
    order: 3,
  },
  {
    titre: "redux",
    image: redux,
    label: "Redux",
    link: "https://redux.js.org/",
    order: 2,
  },
  {
    titre: "GIT",
    image: git,
    order: 10,
    label: "Git",
  },
  {
    titre: "firebase",
    image: firebase,
    order: 4,
  },
];

export const getLogoSkillzRows = () => {
  const allLogos = logoSkillz.sort((a, b) => a.order - b.order);
  const firstLine = allLogos.slice(0, 6);
  const secondLine = allLogos.slice(6, allLogos.length);
  return [firstLine, secondLine];
};
