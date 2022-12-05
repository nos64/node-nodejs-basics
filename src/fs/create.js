import fs from 'fs/promises';
import { constants } from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path from 'path';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileLink = path.resolve(__dirname, 'files', 'fresh.txt');
  try {
    await fs.access(fileLink, constants.F_OK);
    console.log('FS operation failed');
  } catch {
    fs.writeFile(fileLink, 'I am fresh and young')
  }
};

await create();

