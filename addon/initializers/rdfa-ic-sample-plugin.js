import RdfaIcSamplePlugin from '../rdfa-ic-sample-plugin';

function pluginFactory(plugin) {
  return {
    create: (initializers) => {
      const pluginInstance = new plugin();
      Object.assign(pluginInstance, initializers);
      return pluginInstance;
    },
  };
}

export function initialize(application) {
  application.register(
    'plugin:rdfa-ic-sample',
    pluginFactory(RdfaIcSamplePlugin),
    {
      singleton: false,
    }
  );
}

export default {
  initialize,
};
