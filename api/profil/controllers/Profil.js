'use strict';

/**
 * Profil.js controller
 *
 * @description: A set of functions called "actions" for managing `Profil`.
 */

module.exports = {

  /**
   * Retrieve profil records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.profil.search(ctx.query);
    } else {
      return strapi.services.profil.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a profil record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.profil.fetch(ctx.params);
  },

  /**
   * Count profil records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.profil.count(ctx.query);
  },

  /**
   * Create a/an profil record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.profil.add(ctx.request.body);
  },

  /**
   * Update a/an profil record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.profil.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an profil record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.profil.remove(ctx.params);
  }
};
