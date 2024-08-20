"use strict";

/**
 * experience router
 */

// @ts-ignore
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::experience.experience", {
  routes: [
    {
      method: "GET",
      path: "/experiences",
      handler: "experience.find",
    },

    {
      method: "POST",
      path: "/experiences",
      handler: "experiences.create",
      config: {
        policies: ["is-admin"],
      },
    },
    // Other routes...
  ],
});
