export default function spoiler(label, content) {
  return `<details>
    <summary>${label}</summary>
      <div>
        ${content}
      </div>
    </details>
  `;
}
