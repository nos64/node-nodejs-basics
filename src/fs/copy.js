import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const initialPath = path.join(__dirname, 'files');
  const copyPath = path.join(__dirname, 'files_copy');
  
  try {
    await fs.mkdir(copyPath, {recursive: false});
    await fs.access(initialPath, constants.F_OK);
    
  } catch {
    console.log('FS operation failed')
  }
  const copyFiles = await fs.readdir(initialPath);
    for (const file of copyFiles) {
      await fs.copyFile(
        path.join(initialPath, file),
        path.join(copyPath, file)
      );
    }

};

copy();