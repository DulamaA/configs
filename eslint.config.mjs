import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    extends: ["some-other-config-you-use", "prettier"],
    rules: {
      indent: "error",
    },
  },
];
