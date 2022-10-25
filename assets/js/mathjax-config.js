// MathJax Configuration
//
// v2 to v3 upgrade notes:
// - The CommonHTML.linebreaks option is not yet implemented (but may be in a future release)
// - The TeX.noUndefined.attributes option is not yet implemented (but may be in a future release)
window.MathJax = {
    options: {
        // Don't render math in mindmaps as Markmap has its own math renderer.
        ignoreHtmlClass: 'markmap',
    },
    tex: {
        inlineMath: [
            ['$', '$'],
            ['\\(', '\\)'],
        ],
        displayMath: [
            ['$$', '$$'],
            ['\\[', '\\]'],
        ],
        processEscapes: false,
        packages: { '[+]': ['noerrors'] },
        tags: 'ams' // Adds support for numbered equations
    },
    loader: {
        load: ['[tex]/noerrors'],
    },
};