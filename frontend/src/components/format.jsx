


export function removeMarkdownBold(text) {
    return text.replace(/\*\*(.*?)\*\*/g, (_, p1) => p1);
}


// Get text before the first bullet
export function getIntro(text) {
    const intro = text.split(/\n\*\s*\*\*/)[0].trim();
    return removeMarkdownBold(intro);
}

// Extract bullets in the format: * **Title:** Description
export function parseBullets(text) {
    return [...text.matchAll(/^\*\s*\*\*(.+?):\*\*\s*(.+)$/gm)]
        .map(([_, title, desc]) => ({
            title: removeMarkdownBold(title.trim()),
            desc: removeMarkdownBold(desc.trim()),
        }));
}

// Get text after the last bullet
export function getOutro(text) {
    const matches = [...text.matchAll(/^\*\s*\*\*(.+?):\*\*\s*(.+)$/gm)];
    if (!matches.length) return text.trim();

    const last = matches[matches.length - 1];
    const end = text.indexOf(last[0]) + last[0].length;

    const outro = text.slice(end).trim();
    return removeMarkdownBold(outro);
}

// Turn bullets into <li> HTML
export function formatBulletsHTML(bullets) {
    return bullets
        .map(b => `<li><strong>${b.title}:</strong> ${b.desc}</li>`)
        .join('');
}



// Main formatter
export function formatText(rawText) {
    if (!rawText) return "";

    const intro = getIntro(rawText);
    const bullets = parseBullets(rawText);
    const outro = getOutro(rawText);

    if (bullets.length === 0) {
        return `
          <pre class="whitespace-pre-wrap break-words"><code>
          ${intro}
          </code></pre>
        `;
    }

    return `
      <pre class="whitespace-pre-wrap break-words"><code>
      ${intro}
      <ul>
      ${formatBulletsHTML(bullets)}
      </ul>
      ${outro}
      </code></pre>
    `;
}
