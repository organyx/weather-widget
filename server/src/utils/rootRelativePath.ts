import CONFIG from 'config';
import { join } from 'path';

export function getRootRelativePath(path: string) {
  const rootDir = CONFIG.isProduction ? 'dist' : 'src';
  return join(process.cwd(), `${rootDir}/${path}`);
}
