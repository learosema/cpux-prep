export default function spoiler(label, content) {
  const id = label.replace(/\W+/g, '-').toLowerCase();
  return `<details>
    <summary>${label}</summary>
      <div id="${id}">
        ${content}
      </div>
    </details>
  `;
}
