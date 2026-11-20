const { createRequire } = require('node:module');

if (!require('../package.json').dependencies['react-scripts']) {
  require('../scripts/start');
} else {
  const startPath = require.resolve('react-scripts/scripts/start');
  const requireFromStart = createRequire(startPath);

  process.env.BABEL_ENV = 'development';
  process.env.NODE_ENV = 'development';
  requireFromStart('../config/env');

  const configPath = requireFromStart.resolve('../config/webpackDevServer.config');
  const createConfig = require(configPath);
  require.cache[configPath].exports = (...args) => {
    const { https, onBeforeSetupMiddleware, onAfterSetupMiddleware, ...config } =
      createConfig(...args);

    // CRA 5 supplies the old dev-server hooks and enables cross-origin access by default.
    delete config.headers;
    if (config.allowedHosts === 'all' && process.env.DANGEROUSLY_DISABLE_HOST_CHECK !== 'true') {
      config.allowedHosts = 'auto';
    }

    return {
      ...config,
      server: typeof https === 'object' ? { type: 'https', options: https } : https ? 'https' : 'http',
      setupMiddlewares(middlewares, server) {
        onBeforeSetupMiddleware(server);
        onAfterSetupMiddleware({
          app: { use: middleware => middlewares.push(middleware) },
        });
        return middlewares;
      },
    };
  };

  const serverPath = requireFromStart.resolve('webpack-dev-server');
  const WebpackDevServer = require(serverPath);
  require.cache[serverPath].exports = class extends WebpackDevServer {
    close(callback) {
      this.stopCallback(callback);
    }
  };

  require(startPath);
}
