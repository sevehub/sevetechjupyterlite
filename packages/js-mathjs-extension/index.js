export default {
  name: "js-mathjs-extension",
  async setup() {
    await import("https://cdn.jsdelivr.net/npm/mathjs@11.8.0/lib/browser/math.js")
      .then((module) => {
        window.math = module;
        console.log("Math.js loaded and available as window.math");
      })
      .catch((err) => {
        console.error("Failed to load Math.js", err);
      });
  }
};
