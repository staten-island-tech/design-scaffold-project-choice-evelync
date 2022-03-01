module.exports = function(eleventyConfig) {
    eleventyConfig.addPassThroughCopy("src/style");
    eleventyConfig.addPassThroughCopy("src/md");
    eleventyConfig.addPassThroughCopy("src/media");
    return{
        dir:{
            input:"src",
            output:"dist",
        },
    };
};