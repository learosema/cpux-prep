import { parseHTML } from "linkedom";
import { createIndex } from "pagefind";
import { readFile } from "node:fs/promises";

async function createSortedCollection(eleventyConfig) {
  const src = await readFile("src/index.md", "utf8");
  const linkRegex = /\[.*?\]\((.*?)\)/g;
  const hrefs = ["./src/index.md"];
  let m;
  while ((m = linkRegex.exec(src)) !== null) {
    if (m[1]?.startsWith("https://") === false) {
      const file = "./src/" + m[1];
      hrefs.push(file);
    }
  }
  eleventyConfig.addCollection("toc", function (collectionsApi) {
    return collectionsApi
      .getAll()
      .filter((a) => hrefs.indexOf(a.inputPath) >= 0)
      .sort(function (a, b) {
        const aIndex = hrefs.indexOf(a.inputPath);
        const bIndex = hrefs.indexOf(b.inputPath);

        return aIndex - bIndex;
      });
  });
}


export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(createSortedCollection);

  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPassthroughCopy('src/images')

  // Shortcode `{% spoiler summary, message %}` for Nunjucks/Markdown.
  eleventyConfig.addShortcode('spoiler', function (summary, message) {
    return `<details>
      <summary>${summary}</summary>
      <div>
        ${message}
      </div>
    </details>`;
  })
  
  eleventyConfig.addGlobalData('layout', () => 'default.njk')




  eleventyConfig.addGlobalData("layout", () => "default.njk");
  // Set global permalinks to resource.html style
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) =>
      `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });

  eleventyConfig.addGlobalData("eleventyComputed.title", () => {
    return (data) => {
      if (data.page.inputPath?.endsWith(".md")) {
        const titleRegex = /^\#\s(.*?)\r?\n/;
        const match = data.page.rawInput?.match(titleRegex);
        return match ? match[1] : "";
      }
      return "";
    };
  });

  eleventyConfig.addTransform('htmlpost', function (content) {
    if (((this.page.outputPath || "").endsWith(".html")) === false) {
      return content;
    }
    const { document } = parseHTML(content);
    const isRelativeLink = (href) => /^https?:\/\//.test(href) === false;
    const anchors = document.querySelectorAll("a[href]");
    for (const anchor of anchors) {
      const href = anchor.getAttribute("href") || "";
      if (isRelativeLink(href) && href.endsWith(".md")) {
        anchor.setAttribute("href", href.replace(/\.md$/, ".html"));
      }
    }

    for (const li of document.querySelectorAll('li')) {
      const text = li.textContent.trim() || ''
      if (text.startsWith('[ ]')) {
        li.textContent = text.replace('[ ]', '')
        li.innerHTML = `<label><input type="checkbox">&nbsp; ${li.innerHTML}</label>`
      }
    }
    return document.toString();
  });



  eleventyConfig.on('eleventy.after', async () => {
    console.info('creating search index files')
    const { index } = await createIndex();
    index.addDirectory({ path: "dist" });
    await index.writeFiles({ outputPath: "dist/pagefind" });
    console.info("done.");
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "dist",
    },
  };
}
