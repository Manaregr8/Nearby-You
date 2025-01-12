import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Project Page",
        path: "/projects",
        newTab: false,
      },
      {
        id: 63,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
    ],
  },
];
export default menuData;
