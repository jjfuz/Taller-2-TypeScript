import { series } from "./data.js";
var tableBody = document.getElementById("series-table-body");
var averageContainer = document.getElementById("average-seasons");
renderSeriesInTable(series);
showAverageSeasons(series);
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td><a href=\"#\" class=\"serie-link\">").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n      ");
        row.querySelector(".serie-link").addEventListener("click", function (e) {
            e.preventDefault();
            showSerieDetail(serie);
        });
        tableBody.appendChild(row);
    });
}
function showAverageSeasons(series) {
    var total = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var avg = total / series.length;
    averageContainer.innerText = "Promedio de temporadas: ".concat(avg.toFixed(2));
}
function showSerieDetail(serie) {
    var card = document.getElementById("series-detail");
    var img = document.getElementById("series-img");
    var title = document.getElementById("series-title");
    var desc = document.getElementById("series-description");
    var link = document.getElementById("series-link");
    img.src = serie.image;
    title.textContent = serie.name;
    desc.textContent = serie.description;
    link.href = serie.link;
    card.style.display = "block";
}
