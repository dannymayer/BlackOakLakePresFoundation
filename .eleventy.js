module.exports = function (eleventyConfig) {
    // Input directory: src
    // Output directory: _site
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/js");
    return {
        // When a passthrough file is modified, rebuild the pages:
        passthroughFileCopy: true,
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};