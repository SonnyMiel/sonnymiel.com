import {
  BuilderContext,
  BuilderOutput,
  createBuilder
} from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';

import * as childProcess from 'child_process';

interface Options extends json.JsonObject {
  registry: string;
  version: string;
}

export const runBuilder = async (
  options: Options,
  context: BuilderContext,
): Promise<BuilderOutput> => {
  const workDir = context.workspaceRoot;
  const projectName = context.target.project;
  if (!projectName) {
    return new Promise((resolve) =>
      resolve({ success: false, error: 'Project name is undefined' })
    );
  }
  const projectMetadata = await context.getProjectMetadata(projectName);
  const { registry, version } = options;
  
  const commands = [];
  commands.push([
    `cp -Rf dist/${projectMetadata.root} ${projectMetadata.root}/dist`,
    { cwd: workDir },
  ]);
  commands.push([
    `docker build --tag ${registry}/${projectName}:latest .`,
    { cwd: `${workDir}/${projectMetadata.root}` },
  ]);
  commands.push([
    `docker push ${registry}/${projectName}:latest`,
    { cwd: `${workDir}/${projectMetadata.root}`},
  ]);

  if (version) {
    commands.push([
      `docker build --tag ${registry}/${projectName}:${version} .`,
      { cwd: `${workDir}/${projectMetadata.root}` },
    ]);
    commands.push([
      `docker push  ${registry}/${projectName}:${version}`,
      { cwd: `${workDir}/${projectMetadata.root}` },
    ]);
  }

  let error: Error;
  try {
    commands.forEach((command) => {
      console.log(childProcess.execSync(command[0], command[1]).toString());
    });
  } catch (err) {
    error = err;
  }

  return new Promise((resolve) => {
    resolve({ success: error === undefined, error: error?.message });
  });
};

export default createBuilder(runBuilder);

