import fs from 'fs/promises';
import path from 'path';
import { ResumeData } from '@/types/resume';

export async function loadUserData(id: string): Promise<ResumeData | null> {
  const dataDirectory = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDirectory, `${id}.json`);
  const fakeFilePath = path.join(dataDirectory, `fake.json`);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    const fileContents = await fs.readFile(fakeFilePath, 'utf8');
    return JSON.parse(fileContents);
  }
}

export async function getAllUserIds() {
  const dataDirectory = path.join(process.cwd(), 'data');
  const fileNames = await fs.readdir(dataDirectory);
  const ids = fileNames.map(fileName => fileName.replace(/\.json$/, ''));

  // add fake id
  ids.push(
    'janesmith',
    'johnsmith',
    'sophiechen',
    'michaellee',
    'emilybrown',
    'alicejohnson',
    'davidkim',
    'oliviawang',
    'williamchen',
    'chloejones',
    'danielpark',
    'isabellelee',
    'lukechen',
    'nataliekim',
    'olivernguyen',
    'samanthajohnson',
    'johndoe',
    'janedoe',
    'boblee',
  );
  return ids;
}
