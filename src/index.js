import "./styles.css";
import officeImage from "./office.jpg";
import officeImage2 from "./officeImage.jpg";
import phoneIcon from "./phone-icon.svg";

const picture = document.querySelector("header picture");
const source = document.createElement("source");
const imgFallback = document.createElement("img");
const text = document.createElement("span");
const projectGrid = document.querySelector(".projects-grid");

text.textContent = "Roberto Mochaito";
text.classList.add("no-select");
source.srcset = officeImage2;
source.media = "(min-width: 200px)";
picture.append(source, imgFallback, text);

const colors = [
  "#9E1B1C", // Red
  "#7C75CA", // Purple
  "#5E8F4D", // Green
  "#C363B4", // Pink
  "#D98F39", // Orange
  "#4BA2D3", // Blue
  "#F9A8D4", // Pastel Pink
  "#A6D3D3", // Pastel Cyan
  "#F1E6B8", // Pastel Yellow
  "#D4A5A5", // Pastel Coral
  "#B3C9A9", // Pastel Green
  "#F4D1C7", // Pastel Peach
  "#C6D7EB", // Pastel Blue
  "#F5B7B1", // Light Rose
  "#A8E6CF", // Light Mint
  "#FFC3A0", // Light Apricot
  "#F4B6B3", // Light Pinkish Red
];

for (let i = 0; i < 8; i++) {
  projectGrid.innerHTML += `<article class="project-card">
          <div class="project-iamge" style="background-color: ${colors[i]};">
            <picture> </picture>
            <span class="project-image-text overlay">screenshot of project</span>
          </div>
          <div class="project-header">
            <div class="project-title">Project Name</div>
            <div class="project-buttons">
              <button class="small icon devicon-github-original colored"></button>
              <button class="small icon devicon-twitter-original"></button> 
            </div>
            </div>
          <div class="project-description">Short description of the project. Just a couple sentences will do.</div> 
        </article>`;
}
