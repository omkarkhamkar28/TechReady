/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    src: "/src/",  // Mount the 'src' folder
    public: "/",   // Public folder for hot reload
  },
  plugins: ['@snowpack/plugin-react-refresh'], // React hot refresh plugin
  routes: [
    // Enable an SPA Fallback in development
    {
      match: "routes",
      src: ".*",
      dest: "/index.html",
    },
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',  // Settings for bundling and optimization
  },
  packageOptions: {},
  devOptions: {
    port: 8080,  // Development server port
  },
  buildOptions: {},
  env: {
    SNOWPACK_PUBLIC_API: "http://localhost:3001",  // API URL
  },
};
