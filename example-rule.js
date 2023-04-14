module.exports = {
  rules: {
    'example-rule': {
      meta: {
        docs: {
          description: 'Scan for the word "vhd_api_key"',
          category: 'Best Practices',
          recommended: false,
        },
        fixable: null,
        schema: [],
      },
      create: function (context) {
        return {
          Literal(node) {
            if (typeof node.value === 'string' && node.value.includes('vhd_api_key')) {
              context.report({
                node,
                message: 'Avoid using the word "vhd_api_key"',
              });
            }
          },
        };
      },
    },
  },
};
