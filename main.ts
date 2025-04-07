import { Serie } from './Serie.js';
import { series } from './data.js';

const tableBody: HTMLElement = document.getElementById("series-table-body")!;
const averageContainer: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesInTable(series);
showAverageSeasons(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(serie => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    tableBody.appendChild(row);
  });
}

function showAverageSeasons(series: Serie[]): void {
  const total = series.reduce((sum, serie) => sum + serie.seasons, 0);
  const avg = total / series.length;
  averageContainer.innerText = `Promedio de temporadas: ${avg.toFixed(2)}`;
}

console.log("main.ts ejecutado");
