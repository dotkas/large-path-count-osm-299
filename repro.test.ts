import { describe, test } from '@jest/globals';
import * as depGraph from '@snyk/dep-graph';
import * as fs from 'fs';
import * as path from "path";

describe('actual', () => {
    test('existing', () => {
        const simpleGraphJson = JSON.parse(
            fs.readFileSync(path.join(__dirname, 'google-deps.json'), 'utf8'),
        );
        const graph = depGraph.createFromJSON(simpleGraphJson);
        const pkg = {
            'name': 'google.golang.org/protobuf/internal/detrand',
            'version': '1.29.1'
        };
        const count = graph.countPathsToRoot(pkg);
        console.log(count);
    });
});
