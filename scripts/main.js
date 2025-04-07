import { series } from './data.js';
var tableBody = document.getElementById("series-table-body");
var averageContainer = document.getElementById("average-seasons");
renderSeriesInTable(series);
showAverageSeasons(series);
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        tableBody.appendChild(row);
    });
}
function showAverageSeasons(series) {
    var total = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var avg = total / series.length;
    averageContainer.innerText = "Promedio de temporadas: ".concat(avg.toFixed(2));
}
console.log("main.ts ejecutado");
