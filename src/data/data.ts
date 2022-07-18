import ENSEEIHT from "assets/images/logos/enseeiht.png";
import NIMES from "assets/images/logos/nimes.png";
import MYNFT from "assets/images/logos/mynft.png";
import GENVIA from "assets/images/logos/genvia.png";
import KUAS from "assets/images/logos/kuas.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import mysql from "assets/images/skills/mysql.png";
import aws from "assets/images/skills/aws.png";
import java from "assets/images/skills/java.png";
import terraform from "assets/images/skills/terraform.png";
import ansible from "assets/images/skills/ansible.png";
import ocaml from "assets/images/skills/ocaml.png";
import ethers from "assets/images/skills/ethers.png";
import uml from "assets/images/skills/uml.png";
import node from "assets/images/skills/node.png";
import julia from "assets/images/skills/julia.png";

export const companies = [
  // {
  //   title: "Codenya Studio",
  //   alt: "CS image",
  //   role: "Co-founder, CTO",
  //   skills: ["ruby", "rails", "python", "typescript", "react", "aws"],
  //   period: "2018 - Present",
  //   logo: CodenyaLogo
  // }
];

export const institutes = [
  {
    short_title: "KUAS",
    title: "Kyoto University of Advanced Science",
    type: "school",
    alt: "KUAS",
    role: "Student",
    skills: ["Software Systems", "Metaprogramming"],
    period: "2022 - 2023",
    startingYear: "2022",
    logo: KUAS
  },
  {
    short_title: "MyNFT",
    title: "MyNFT",
    type: "internship",
    duration: "4 months",
    alt: "MYNFT",
    role: "Intern Blockchain Fullstack Developer",
    skills: ["Devops", "Javascript", "AWS", "Ansible", "Terraform"],
    period: "2022",
    startingYear: "2022",
    logo: MYNFT
  },
  {
    short_title: "Genvia",
    title: "Genvia",
    type: "internship",
    duration: "4 months",
    alt: "GENVIA",
    role: "Intern IOT Engineer",
    skills: ["Python", "IOT"],
    period: "2021",
    startingYear: "2021",
    logo: GENVIA
  },
  {
    short_title: "ENSEEIHT",
    type: "school",
    title: "École nationale supérieure d'électrotechnique, d'électronique, d'informatique, d'hydraulique et des télécommunications",
    alt: "ENSEEIHT",
    role: "Computer Science",
    skills: ["Software Systems", "Digital Science", "Applied Mathematics"],
    period: "2020 - 2023",
    startingYear: "2020",
    logo: ENSEEIHT
  },
  {
    short_title: "CPGE PCSI/PSI",
    type: "school",
    title: "CPGE Lycée Alphonse Daudet",
    alt: "CPGE PCSI/PSI",
    role: "Student",
    skills: ["Mathematics", "Chemistry", "Physics", "Engineering Science", "Digital Science"],
    period: "2018 - 2020",
    startingYear: "2018",
    logo: NIMES,
    awards: [
      {
        title: "BAC S",
        description:
          "Scientific baccalaureate",
        date: "2018"
      }
    ]
  }
];

export const skills = [
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "Terraform",
    description: "Devops language",
    link: "",
    type: "devops",
    image: terraform
  },
  {
    name: "Ansible",
    description: "Devops language",
    link: "",
    type: "devops",
    image: ansible
  },
  {
    name: "Java",
    description: "Object language",
    link: "https://www.python.org/",
    type: "development",
    image: java
  },
  {
    name: "OCaml",
    description: "Functional language",
    link: "",
    type: "development",
    image: ocaml
  },
  {
    name: "EthersJS",
    description: "WEB3",
    link: "",
    type: "development",
    image: ethers
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.java.com/",
    type: "development",
    image: python
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "UML",
    description: "Unified modeling languages",
    link: "",
    type: "development",
    image: uml
  },
  {
    name: "NodeJS",
    description: "Web development",
    link: "",
    type: "development",
    image: node
  },
  {
    name: "Julia",
    description: "language",
    link: "",
    type: "development",
    image: julia
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
];
