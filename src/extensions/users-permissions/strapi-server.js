module.exports = (plugin) => {
  plugin.controllers.auth.customlogin = async (ctx) => {
    const { auth } = strapi.plugin("users-permissions").controllers;

    const user = await strapi.db
      .query("plugin::users-permissions.user")
      .findOne({
        select: ["email"],
        where: { email: ctx?.request?.body?.identifier },
        populate: { role: true },
      });

    if (user?.role?.type === "authenticated" || user?.role?.type === "public") {
      return ctx.forbidden("Access denied");
    }

    await auth.callback(ctx);
  };

  plugin.routes["content-api"].routes.push({
    method: "POST",
    path: "/admin/login",
    handler: "auth.customlogin",
  });

  return plugin;
};
