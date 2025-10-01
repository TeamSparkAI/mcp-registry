"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonPath = getJsonPath;
function getJsonPath(basePath, ...segments) {
    const parts = [basePath];
    for (const segment of segments) {
        if (typeof segment === 'number') {
            parts.push(`[${segment}]`);
        }
        else {
            parts.push(segment);
        }
    }
    return parts.join('');
}
