import { Serie } from "./Serie.js";
import { series } from "./data.js";

const tableBody: HTMLElement = document.getElementById("series-table-body")!;
const averageContainer: HTMLElement =
  document.getElementById("average-seasons")!;

renderSeriesInTable(series);
showAverageSeasons(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((serie) => {
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${serie.id}</td>
        <td><a href="#" class="serie-link">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;

    row.querySelector(".serie-link")!.addEventListener("click", (e) => {
      e.preventDefault();
      showSerieDetail(serie);
    });

    tableBody.appendChild(row);
  });
}

function showAverageSeasons(series: Serie[]): void {
  const total = series.reduce((sum, serie) => sum + serie.seasons, 0);
  const avg = total / series.length;
  averageContainer.innerText = `Promedio de temporadas: ${avg.toFixed(2)}`;
}

function showSerieDetail(serie: Serie): void {
  const card = document.getElementById("series-detail")!;
  const img = document.getElementById("series-img") as HTMLImageElement;
  const title = document.getElementById("series-title")!;
  const desc = document.getElementById("series-description")!;
  const link = document.getElementById("series-link") as HTMLAnchorElement;

  img.src = serie.image;
  title.textContent = serie.name;
  desc.textContent = serie.description;
  link.href = serie.link;

  card.style.display = "block";
}
