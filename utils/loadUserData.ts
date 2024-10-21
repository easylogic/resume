import fs from 'fs/promises';
import path from 'path';
import { ResumeData } from '@/types/resume';

export async function loadUserData(id: string): Promise<ResumeData | null> {
  const dataDirectory = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDirectory, `${id}.json`);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading user data for ID ${id}:`, error);
    return null;
  }
}

export async function getAllUserIds() {
  const dataDirectory = path.join(process.cwd(), 'data');
  const fileNames = await fs.readdir(dataDirectory);
  return fileNames.map(fileName => fileName.replace(/\.json$/, ''));
}
