<script>
    /**
     * This function finds fragmented LaTeX blocks and cleans them up.
     */
    function cleanupLatexBlocks() {
        const elements = document.querySelectorAll('p.framer-text');
        elements.forEach(el => {
            let html = el.innerHTML;
            const regex = /\$\$([\s\S]*?)\$\$/g;
            const newHtml = html.replace(regex, (match, latexContent) => {
                const cleanedLatex = latexContent.replace(/<br\s*\/?>/g, '').trim();
                return `$$${cleanedLatex}$$`;
            });
            el.innerHTML = newHtml;
        });
    }

    /**
     * This function runs the cleanup and rendering logic.
     */
    function renderMathWithKatex() {
        // Step 1: Clean up the HTML from the CMS.
        cleanupLatexBlocks();

        // Step 2: Render the math using KaTeX.
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError: false
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        // Wait for 300 milliseconds after the initial DOM is loaded
        // to give the CMS framework time to inject the final content.
        // You can adjust this value if necessary.
        setTimeout(renderMathWithKatex, 300); 
    });
</script>
