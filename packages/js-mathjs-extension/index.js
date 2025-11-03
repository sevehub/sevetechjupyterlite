
export default {
  name: "js-mathjs-extension",
  async setup() {
    try {
      const module = await import("https://cdn.jsdelivr.net/npm/mathjs@11.8.0/lib/browser/math.js");
      window.math = module.create(module.all); // Explicitly create and assign math instance
      console.log("Math.js loaded and available as window.math");
    } catch (err) {
      console.error("Failed to load Math.js", err);
    }
  }
};

