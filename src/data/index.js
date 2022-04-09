import { getRoutes, getNavigation } from "@/data/utils";

export const SITE_PATH = "ted-michaels-website";

const MASTER_ROUTES = [
  {
    path: "/",
    label: "home",
    component: () => import("@/views/home"),
    hidden: false,
  },
  {
    path: "/about",
    label: "about ted",
    component: () => import("@/views/about"),
    hidden: false,
  },

  {
    path: "/services",
    label: "services",
    component: () => import("@/views/services"),
    hidden: false,
  },
  {
    path: "/videos",
    label: "videos",
    component: () => import("@/views/videos"),
    hidden: false,
  },
  {
    path: "/contact",
    label: "contact",
    component: () => import("@/views/contact"),
    hidden: false,
  },
];

export const routes = getRoutes(MASTER_ROUTES);

export const navigation = getNavigation(MASTER_ROUTES);
