import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
} from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';

import * as childProcess from 'child_process';

interface Options extends json.JsonObject {
  endpoint: string;
  registry: string;
  version: string;
}

export const runBuilder = async (
  options: Options,
  context: BuilderContext,
): Promise<BuilderOutput> => {
    const projectName = context.target.project;
    if(!projectName) {
        return new Promise((resolve) => resolve({ success: false, error: 'Project name undefined' }));
    };
    const { endpoint, registry, version } = options;
    let error: Error;
    try {
        const command = `curl -d '{"name":"${registry}/${projectName}", "tag":"${version || 'latest'}"}' -H "Content-Type: application/json" -X POST ${endpoint}`;
        console.log(childProcess.execSync(command, { cwd: context.workspaceRoot }).toString());
    } catch (err) {
      error = err;
    }

    return new Promise((resolve) => {
      resolve({ success: error === undefined, error: error?.message });
    });
};

export default createBuilder(runBuilder);
