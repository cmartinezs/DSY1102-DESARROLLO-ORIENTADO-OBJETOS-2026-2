(() => {
  const repo = "cmartinezs/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2";
  const versions = {
    eventpass: { title: "Versión A · EventPass", file: "version-a-eventpass.md" },
    repairdesk: { title: "Versión B · RepairDesk", file: "version-b-repairdesk.md" },
    cargotrack: { title: "Versión C · CargoTrack", file: "version-c-cargotrack.md" }
  };

  const params = new URLSearchParams(location.search);
  const key = versions[params.get("version")] ? params.get("version") : "eventpass";
  const selected = versions[key];
  const path = "evaluaciones/ep1-liberada/" + selected.file;
  const rawUrl = "https://raw.githubusercontent.com/" + repo + "/master/" + path;
  const githubUrl = "https://github.com/" + repo + "/blob/master/" + path;

  document.title = selected.title + " · Práctica liberada · DSY1102";
  document.getElementById("practice-title").textContent = selected.title;
  document.getElementById("github-source").href = githubUrl;

  const escapeHtml = value => value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  const inline = source => {
    let s = escapeHtml(source);
    s = s.replace(/\`([^\`]+)\`/g, "<code>$1</code>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2">$1</a>');
    return s;
  };

  const isTableSeparator = line => {
    const cells = line.trim().replace(/^\||\|$/g, "").split("|").map(x => x.trim());
    return cells.length > 1 && cells.every(cell => /^:?-{3,}:?$/.test(cell));
  };

  const tableCells = line => line.trim().replace(/^\||\|$/g, "").split("|").map(x => x.trim());

  const renderMarkdown = markdown => {
    const lines = markdown.replace(/\r/g, "").split("\n");
    let html = "";
    let i = 0;
    let paragraph = [];
    let listType = null;
    const headingIds = new Map();

    const closeList = () => {
      if (listType) {
        html += listType === "ul" ? "</ul>" : "</ol>";
        listType = null;
      }
    };

    const flushParagraph = () => {
      if (!paragraph.length) return;
      html += "<p>" + inline(paragraph.join(" ")) + "</p>";
      paragraph = [];
    };

    const uniqueId = text => {
      const base = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-") || "seccion";
      const n = headingIds.get(base) || 0;
      headingIds.set(base, n + 1);
      return n ? base + "-" + (n + 1) : base;
    };

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();

      if (trimmed.startsWith("~~~") || trimmed.startsWith("```")) {
        flushParagraph(); closeList();
        const fence = trimmed.slice(0, 3);
        const lang = trimmed.slice(3).trim();
        i++;
        const code = [];
        while (i < lines.length && !lines[i].trim().startsWith(fence)) {
          code.push(lines[i]); i++;
        }
        html += '<pre><code' + (lang ? ' class="language-' + escapeHtml(lang) + '"' : "") + ">" +
          escapeHtml(code.join("\n")) + "</code></pre>";
        i++; continue;
      }

      if (!trimmed) {
        flushParagraph(); closeList(); i++; continue;
      }

      if (/^---+$/.test(trimmed)) {
        flushParagraph(); closeList(); html += "<hr>"; i++; continue;
      }

      if (/^#{1,6}\s+/.test(trimmed)) {
        flushParagraph(); closeList();
        const level = trimmed.match(/^#+/)[0].length;
        const text = trimmed.replace(/^#{1,6}\s+/, "");
        html += "<h" + level + ' id="' + uniqueId(text) + '">' + inline(text) + "</h" + level + ">";
        i++; continue;
      }

      if (trimmed.startsWith(">")) {
        flushParagraph(); closeList();
        const quote = [];
        while (i < lines.length && lines[i].trim().startsWith(">")) {
          let q = lines[i].trim().replace(/^>\s?/, "");
          if (q === "[!IMPORTANT]") q = "<strong>Importante</strong>";
          else q = inline(q);
          quote.push(q);
          i++;
        }
        html += "<blockquote>" + quote.join("<br>") + "</blockquote>";
        continue;
      }

      if (i + 1 < lines.length && trimmed.includes("|") && isTableSeparator(lines[i + 1])) {
        flushParagraph(); closeList();
        const headers = tableCells(line);
        i += 2;
        const rows = [];
        while (i < lines.length && lines[i].trim().includes("|") && lines[i].trim()) {
          rows.push(tableCells(lines[i])); i++;
        }
        html += "<div class=\"practice-table-wrap\"><table><thead><tr>" +
          headers.map(c => "<th>" + inline(c) + "</th>").join("") +
          "</tr></thead><tbody>" +
          rows.map(row => "<tr>" + row.map(c => "<td>" + inline(c) + "</td>").join("") + "</tr>").join("") +
          "</tbody></table></div>";
        continue;
      }

      const ul = trimmed.match(/^[-*]\s+(.*)$/);
      const ol = trimmed.match(/^\d+\.\s+(.*)$/);
      if (ul || ol) {
        flushParagraph();
        const wanted = ul ? "ul" : "ol";
        if (listType !== wanted) {
          closeList();
          html += wanted === "ul" ? "<ul>" : "<ol>";
          listType = wanted;
        }
        html += "<li>" + inline((ul || ol)[1]) + "</li>";
        i++; continue;
      }

      paragraph.push(trimmed);
      i++;
    }

    flushParagraph(); closeList();
    return html;
  };

  fetch(rawUrl, { cache: "no-store" })
    .then(response => {
      if (!response.ok) throw new Error("No fue posible cargar el archivo.");
      return response.text();
    })
    .then(markdown => {
      document.getElementById("practice-document").innerHTML = renderMarkdown(markdown);
    })
    .catch(error => {
      document.getElementById("practice-document").innerHTML =
        '<div class="notice notice-danger"><strong>No se pudo cargar el enunciado.</strong><p>' +
        escapeHtml(error.message) + '</p><a class="btn btn-primary" href="' + githubUrl + '">Abrir en GitHub</a></div>';
    });
})();