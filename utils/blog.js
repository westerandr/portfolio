const fs = require('fs');
const path = require('path');

// Function to read and summarize Markdown files
export function getSummarizedPosts() {
  const files = fs.readdirSync(postsDir);
  return files.map(file => {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const summary = content.split('\n').slice(0, 5).join(' '); // First 5 lines as summary
    const title = file.replace('.md', '').replace(/(^|\s)\S/g, (match) => match.toUpperCase());
    return { title, summary, filePath };
  });
}

// Function to get full content of a Markdown file
export function getPostContent(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}
