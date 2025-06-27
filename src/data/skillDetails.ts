import js from "@/assets/skills/js.png"; // Add your actual paths
import ts from "@/assets/skills/ts.png";
import cpp from "@/assets/skills/cpp.png";
import html from "@/assets/skills/html.png";
import css from "@/assets/skills/css.png";
import react from "@/assets/skills/react.png";
import next from "@/assets/skills/next.png";
import tailwind from "@/assets/skills/tailwind.png";
import shadcn from "@/assets/skills/shadcn.png";
import redux from "@/assets/skills/redux.png";
import node from "@/assets/skills/node.png";
import express from "@/assets/skills/express.png";
import mongodb from "@/assets/skills/mongodb.png";
import mysql from "@/assets/skills/mysql.png";
import arcjet from "@/assets/skills/arcjet.png";
import authjs from "@/assets/skills/authjs.png";
import firebase from "@/assets/skills/firebase.png";
import github from "@/assets/skills/github.png";
import postman from "@/assets/skills/postman.png";
import figma from "@/assets/skills/figma.png";
import cursor from "@/assets/skills/cursor.png";
import vscode from "@/assets/skills/vscode.png";

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: js },
      { name: "TypeScript", icon: ts },
      { name: "C++", icon: cpp },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React JS", icon: react },
      { name: "Next js", icon: next },
      { name: "Tailwind", icon: tailwind },
      { name: "Shadcn ui", icon: shadcn },
      { name: "Redux", icon: redux },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node Js", icon: node },
      { name: "Express Js", icon: express },
      { name: "MongoDB", icon: mongodb },
      { name: "MySQL", icon: mysql },
      { name: "Arcjet", icon: arcjet },
      { name: "Auth Js", icon: authjs },
      { name: "Firebase", icon: firebase },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "GitHub", icon: github },
      { name: "Postman", icon: postman },
      { name: "Figma", icon: figma },
      { name: "Curser", icon: cursor },
      { name: "Vs Code", icon: vscode },
    ],
  },
];