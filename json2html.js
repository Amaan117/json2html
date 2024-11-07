// json2html.js
export default function json2html(data) {
    // Extract all unique keys to ensure all columns are included in the table
    const allKeys = [...new Set(data.flatMap(obj => Object.keys(obj)))];

    // Create the table header
    let table = `<table data-user="amaanmohammed437@gmail.com"><thead><tr>`;
    allKeys.forEach(key => {
        table += `<th>${key}</th>`;
    });
    table += `</tr></thead><tbody>`;

    // Create the table rows
    data.forEach(obj => {
        table += `<tr>`;
        allKeys.forEach(key => {
            table += `<td>${obj[key] || ''}</td>`;
        });
        table += `</tr>`;
    });

    table += `</tbody></table>`;
    return table;
}
