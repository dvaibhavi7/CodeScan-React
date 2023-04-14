module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow the use of the word "vhd_api_key" in your code',
      category: 'Best Practices',
      recommended: true
    },
    fixable: null,
    schema: []
  },
  create: function(context) {
    return {
      Identifier: function(node) {
        if (node.name === 'vhd_api_key') {
          context.report({
            node: node,
            message: 'Avoid using the word "vhd_api_key" in your code.'
          });
        }
      }
    };
  }
};
