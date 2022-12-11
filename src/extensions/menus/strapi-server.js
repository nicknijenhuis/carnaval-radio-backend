module.exports = plugin => {
  // Get current `MenuItem` attributes.
  const defaultAttrs = plugin.contentTypes[ 'menu-item' ].schema.attributes;

  // Define custom attributes for `MenuItem` the same way they would be defined
  // on any other schema.
  const customAttrs = {
    Page: {
        type: "relation",
        relation: "oneToOne",
        target: "api::page.page"
    },
  };

  // Extend the `MenuItem` content type with custom attributes.
  plugin.contentTypes['menu-item' ].schema.attributes = {
    ...defaultAttrs,
    ...customAttrs,
  };

  return plugin;
};
