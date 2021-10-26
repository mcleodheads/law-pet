import {ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE} from "./constants";
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";

export const routes = [
  {
    path: HOME_ROUTE,
    component: Home,
  },
  {
    path: ABOUT_ROUTE,
    component: About,
  },
  {
    path: CONTACTS_ROUTE,
    component: Contacts,
  },
]