"use strict";

/**
 * experience controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::experience.experience"
  // ({ strapi }) => ({
  //   async find(ctx) {
  //     const user = ctx.state.user;

  //     if (!user) {
  //       return ctx.unauthorized("You must be logged in to view experiences.");
  //     }

  //     // Filter experiences by the authenticated user's ID
  //     // ctx.query = {
  //     //     ...ctx.query,
  //     //     filters: {
  //     //         ...ctx.query.filters,
  //     //         user: user.id,
  //     //     },
  //     // };

  //     // Call the default core controller find method
  //     const { data, meta } = await super.find(ctx);

  //     return { data, meta };
  //   },
  // })
);
