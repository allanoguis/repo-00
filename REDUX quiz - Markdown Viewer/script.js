// Default markdown content
const defaultMarkdown = `# Welcome to my Markdown Previewer!

## This is a sub-heading

[Learn more about Markdown](https://www.markdownguide.org/)

Inline code: \`const x = 10;\`

\`\`\`
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote.

![Markdown Logo](https://markdown-here.com/img/icon256.png)

**This text is bold.**`;

// Set default markdown in the editor
document.getElementById("editor").value = defaultMarkdown;

// Function to update the preview
const updatePreview = () => {
  const markdownText = document.getElementById("editor").value;
  document.getElementById("preview").innerHTML = marked(markdownText);
};

// Event listener for input in the textarea
document.getElementById("editor").addEventListener("input", updatePreview);

// Initial rendering of the preview
updatePreview();
