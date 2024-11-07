export default function json2html(data) {
    const columns = ["Name", "Age", "Gender"];
    let html = '<table data-user="amaanmohammed437@gmail.com">';
    html += "<thead><tr>";
  
    // Add table headers
    columns.forEach(col => {
      html += `<th>${col}</th>`;
    });
  
    html += "</tr></thead><tbody>";
  
    // Add table rows
    data.forEach(item => {
      html += "<tr>";
      columns.forEach(col => {
        html += `<td>${item[col] !== undefined ? item[col] : ""}</td>`;
      });
      html += "</tr>";
    });
  
    html += "</tbody></table>";
    return html;
  }
  