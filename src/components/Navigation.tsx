import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./about";
import Resume from "./resume";
import RepositoriesList from "./repositories-list";
import Home from "./home";
import TechStack from "./tech-stack";
import Achievements from "./achievements";
import Internship_Report from "./internship_report";
import Lisggyard from "./lisggyard";
import Association from "./association";
// import EducationStory from "./education-story";
import MyStory from "./my-story";

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/about", exact: true, name: "About", component: About },
  { path: "/resume", exact: true, name: "Resume", component: Resume },
  { path: "/internship_report", exact: true, name: "Internship_Report", component: Internship_Report },
  { path: "/lisggyard", exact: true, name: "Lissgyard", component: Lisggyard },
  { path: "/association", exact: true, name: "About", component: Association },
  { path: "/achievements", exact: true, name: "Achievements", component: Achievements },
  { path: "/open-source", exact: true, name: "OpenSource", component: RepositoriesList },
  { path: "/tech-stack", exact: true, name: "Tools", component: TechStack },
  { path: "/story-timeline", exact: true, name: "My Story", component: MyStory }

];
const Navigation = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={props => <route.component {...props} />}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
