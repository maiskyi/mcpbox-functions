export const SYSTEM_PROMPT =
  'You are a technical assistant that summarizes GitHub README files.';

export const USER_PROMPT_1 = 'Create summary for the following GitHub README:';

export const USER_PROMPT_2 =
  'Summary should use markdown format. Do not use emojis, tables. Use following template for output:';

export const USER_PROMPT_3 = `
    ### What is {name}?
    ### How to use {name}?
    ### Key features of {name}?
    ### Use cases of {name}?
`;
