## The Scrolls of Eldoria

### Background:

In the enchanted land of Eldoria, ancient scrolls contain the secrets of the universe. These scrolls, however, were scattered and protected by the Elders using powerful spells. These spells concealed the secrets within the scrolls, adding layers of misleading information to deter prying eyes. Over time, these scrolls were digitized and stored in the Great Eldorian Library, accessible only through the Eldorian Web of Knowledge.

### Objective:

You, a young sorcerer's apprentice, have been given the task to retrieve and decipher one such scroll. The scroll is stored as a file on the Eldorian Web of Knowledge. You have to make an HTTP call to fetch the scroll's content. However, the Elders' misleading information must be filtered out using the ancient method of Regular Expressions to reveal the true secrets within.

### Specifications:

1. **Data Retrieval:**
    - Use the magical HTTP call to fetch the scroll's content. You'll find the scroll in the Great Eldorian Library's `https://` location.
    - The content will be in text format.

2. **Deciphering the Scroll:**
    - The scroll contains both the Elders' secrets and misleading information.
    - The true secrets have a specific pattern: they are always surrounded by the symbols `{*` and `*}`.
    - Extract all the true secrets from the scroll.

3. **Output:**
    - Display the extracted secrets in a structured manner.
    - Ensure that no misleading information is displayed.

### Constraints:

- Write the simulation using GitHub Copilot and any language you choose. Try learning a new language if you're up for the challenge!
- Ensure efficient algorithms to handle text retrieval and extraction. Ask GitHub Copilot/Chat, "How can I make this code more readable and maintainable?".

### Summary of High-Level Steps to Perform:

1. Make an HTTP call to retrieve the content of the scroll.
2. Use a regular expression to filter out the misleading information and extract the true secrets.
3. Display the extracted secrets.

