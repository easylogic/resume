import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export async function loadResumeData(username: string) {
  const configPath = path.join(process.cwd(), 'data', username, 'config.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  if (config.format === 'md') {
    const mdPath = path.join(process.cwd(), 'data', username, 'resume.md');
    const fileContents = fs.readFileSync(mdPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // GitHub Flavored Markdown 처리
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(content);

    return { ...data, content: processedContent.toString() };
  } else {
    const jsonPath = path.join(process.cwd(), 'data', username, 'resume.json');
    return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  }
}
