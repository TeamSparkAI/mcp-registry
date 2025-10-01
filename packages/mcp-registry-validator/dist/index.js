"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractVariableNames = exports.hasTemplateVariables = exports.getJsonPath = exports.linterRules = exports.lintServerData = exports.substituteTransportUrl = exports.validateServerJson = void 0;
// Main API exports
var validation_1 = require("./validation");
Object.defineProperty(exports, "validateServerJson", { enumerable: true, get: function () { return validation_1.validateServerJson; } });
Object.defineProperty(exports, "substituteTransportUrl", { enumerable: true, get: function () { return validation_1.substituteTransportUrl; } });
var linter_1 = require("./linter");
Object.defineProperty(exports, "lintServerData", { enumerable: true, get: function () { return linter_1.lintServerData; } });
Object.defineProperty(exports, "linterRules", { enumerable: true, get: function () { return linter_1.linterRules; } });
// Re-export utility functions
var jsonPath_1 = require("./linter/utils/jsonPath");
Object.defineProperty(exports, "getJsonPath", { enumerable: true, get: function () { return jsonPath_1.getJsonPath; } });
var templates_1 = require("./linter/utils/templates");
Object.defineProperty(exports, "hasTemplateVariables", { enumerable: true, get: function () { return templates_1.hasTemplateVariables; } });
Object.defineProperty(exports, "extractVariableNames", { enumerable: true, get: function () { return templates_1.extractVariableNames; } });
//# sourceMappingURL=index.js.map