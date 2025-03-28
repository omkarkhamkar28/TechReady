/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
    src:'/dist/',
	  public:'/',
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    //  {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    port:8080
  },
  buildOptions: {
    /* ... */
  },
};
