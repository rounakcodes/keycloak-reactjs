const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/demo", {
      target: "https://60b0cc261f26610017fff417.mockapi.io/",
      // target: "http://localhost:7100/#!/devices",
      changeOrigin: true,
    })
  );
};
