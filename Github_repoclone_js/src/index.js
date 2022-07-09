console.log("Page has been loaded");
let userName = `ayush8010720467`;
let colors = [
  "yellow",
  "red",
  "blue",
  "green",
  "purple",
  "black",
  "orange",
  "blueviolet",
  "cadetblue",
  "orangered",
  "burlywood",
];
let languageObj = {};

function getData(user) {
  let api_url = `https://api.github.com/users/${user}/repos`;
  let resp_prpmise = fetch(api_url);
  resp_prpmise
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      let workable_area = document.getElementById("workable_area");
      let languageInRepos = resp
        .filter((elem) => elem.language)
        .map((elem) => elem.language);
      let indexForColor = 0;
      languageInRepos.forEach((elem) => {
        if (!languageObj.hasOwnProperty(elem)) {
          languageObj[elem] = colors[indexForColor++];
        }
      });
      let data = resp.map((elem) => {
        return {
          full_name: elem.full_name,
          html_url: elem.html_url,
          stargazers_count: elem.stargazers_count,
          updated_at: elem.updated_at,
          language: elem.language,
          description: elem.description,
        };
      });
      data.forEach((elem) => {
        let card = createRepoCard(elem);
        workable_area.append(card);
      });
      //   let card = createRepoCard(data[0]);
      //   workable_area.append(card);
    })
    .catch((err) => {
      console.log("Error is", err);
    });
}
function createElem(tag, className = "", innerText = "", ...rest) {
  let createdElem = document.createElement(tag);
  createdElem.setAttribute("class", className);
  createdElem.innerText = innerText;
  if (tag === "img") {
    createdElem.setAttribute("src", rest[0]);
    createdElem.setAttribute("alt", rest[1]);
  }
  return createdElem;
}
function createRepoCard(data) {
  console.log(data);
  let li = createElem("li", "repoLi");
  let liDiv = createElem("div", "py-4");
  let hr = createElem("hr");
  let repoHeading = createElem("div", "repoHeading");
  let h3 = createElem("h3", "wb-break-all", data.full_name);
  repoHeading.append(h3);
  let repoDescription = createElem("div", "repoDescription");
  let descPara = createElem("p", "", (innerText = data.description));
  repoDescription.append(descPara);
  let repoFooter = createElem("div", "repoFooter");
  let langSpan = createElem("span", "lang m3");
  let repo_language_color = createElem("span", "repo-language-color");
  repo_language_color.setAttribute(
    "style",
    `background-color: ${languageObj[data.language]}`
  );
  let langText = createElem("span", "", (innerText = data.language));
  if (data?.language) {
    langSpan.append(repo_language_color, langText);
  }
  let starsz = createElem("span", "stars m3");
  let starImage = createElem(
    "img",
    "octicon octicon-star",
    "",
    (src = "./assets/start.svg"),
    (alt = "star")
  );
  let starCount = document.createTextNode(data.stargazers_count);
  if (data.stargazers_count > 0) {
    starsz.append(starImage, starCount);
  }
  let timeline = createElem("span", "timeline m3", data.updated_at);
  repoFooter.append(langSpan, starsz, timeline);
  liDiv.append(repoHeading, repoDescription, repoFooter);

  li.append(liDiv, hr);
  return li;
}
getData(userName);
// full_name
// html_url
// stargazers_count
// updated_at
// language
// description
