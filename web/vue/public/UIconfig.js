// Note: this file gets copied around, make sure you edit
// the UIconfig located at `gekko/web/vue/dist/UIconfig.js`.

// This config is used by both the frontend as well as the web server.
// see https://gekko.wizb.it/docs/installation/installing_gekko_on_a_server.html#Configuring-Gekko

const CONFIG = {
  headless: true,
  api: {
    host: '0.0.0.0',
    port:
      typeof process !== 'undefined' &&
      process !== undefined &&
      process.env.PORT
        ? process.env.PORT
        : 8080,
    timeout: 120000, // 2 minutes
  },
  ui: {
    ssl: true,
    host: 'https://young-harbor-76195.herokuapp.com',
    port: '443',
    path: '/',
  },
  adapter: 'sqlite',
};
