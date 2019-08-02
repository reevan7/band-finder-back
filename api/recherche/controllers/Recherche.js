'use strict';

/**
 * Recherche.js controller
 *
 * @description: A set of functions called "actions" for managing `Recherche`.
 */

module.exports = {

  /**
   * Retrieve recherche records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.recherche.search(ctx.query);
    } else {
      return strapi.services.recherche.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a recherche record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.recherche.fetch(ctx.params);
  },

  /**
   * Count recherche records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.recherche.count(ctx.query);
  },

  /**
   * Create a/an recherche record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.recherche.add(ctx.request.body);
  },

  /**
   * Update a/an recherche record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.recherche.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an recherche record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.recherche.remove(ctx.params);
  }
};
