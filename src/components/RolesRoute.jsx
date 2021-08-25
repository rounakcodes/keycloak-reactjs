import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import UserService from "../services/UserService";
import NotAllowed from "./NotAllowed";

const RolesRoute = ({ roles, realmRoles, children, ...rest }) => {
  if (realmRoles && realmRoles.length) {
    return (
      <Route {...rest}>
        {UserService.hasRealmRole(realmRoles) ? children : <NotAllowed />}
      </Route>
    );
  }
  if (roles && roles.length) {
    return (
      <Route {...rest}>
        {UserService.hasResourceRole(roles) ? children : <NotAllowed />}
      </Route>
    );
  }
};
RolesRoute.propTypes = {
  realmRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RolesRoute;
