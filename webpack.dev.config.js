import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const mode = 'development';
export const devtool = 'inline-source-map';
export const devServer = {
  static: resolve(__dirname, './dist'),
};