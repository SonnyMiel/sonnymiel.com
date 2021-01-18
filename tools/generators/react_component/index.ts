import { chain, externalSchematic, Rule, Tree, url, apply, move, mergeWith, MergeStrategy, template, SchematicContext } from '@angular-devkit/schematics';
import { dasherize, classify } from '@angular-devkit/core/src/utils/strings';
import { normalize, strings } from '@angular-devkit/core';

function generateFilesFromTemplates(schema: any) : Rule {
  return (tree: Tree, context: SchematicContext) => {
    const sourceTemplates = url('./files');
    const capitalizedDirectory = schema.name.charAt(0).toUpperCase() + schema.name.slice(1);
    const newPath = normalize('apps/' + schema.project + '/' + schema.directory + '/' + capitalizedDirectory );
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      move(newPath),
      template({
        ...schema,
        ...strings
      })
    ]);
    const rule = mergeWith(sourceParametrizedTemplates);
    return rule;
  }
}


export default function(schema: any): Rule {
  return chain([
    generateFilesFromTemplates(schema),
  ]);
}
