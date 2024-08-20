"use strict";

/**
 * `is-admin` policy
 */

module.exports = (policyContext, config, { strapi }) => {
  if (policyContext.state.user.role.type === "refine_admin") {
    // Go to next policy or will reach the controller's action.
    return true;
  }

  return false;
};
