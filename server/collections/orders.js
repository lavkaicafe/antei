/*
 * Add query methods like this:
 *  Orders.findPublic = function () {
 *    return Orders.find({is_public: true});
 *  }
 */

Orders.allow({
  insert: function (userId, doc) {
    return userId &&  doc.user_id === userId;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return doc.user_id === userId;
  },

  remove: function (userId, doc) {
    return doc.user_id === userId;
  },

  fetch: ['user_id']
});

Orders.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  },

  fetch: ['user_id']
});
