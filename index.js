import express from "express";
import bodyParser from "body-parser";
import text from "./text.js";
import skillsAndInterests from "./skills&interests.js";
import pastPorjects from "./pastProjects.js";
import employment from "./employment.js";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs", {
    text: text,
    sandi: skillsAndInterests,
    pastProj: pastPorjects,
  });
});

app.get("/profile", (req, res) => {
  res.render("template.ejs", {
    text: text,
    sandi: skillsAndInterests,
    pastProj: pastPorjects,
  });
});

app.get("/countdown", (req, res) => {
  res.render("countdown.ejs");
});

app.get("/simon-says", (req, res) => {
  res.redirect("Past_Projects/Simon_Game/simon.html");
});

app.get("/tin-dog", (req, res) => {
  res.redirect("Past_Projects/TinDog_Project/tinDog.html");
});

app.get("/notes", (req, res) => {
  res.redirect("https://2z77nd.csb.app/");
});

app.get("/blog-posts", (req, res) => {
  res.redirect("https://github.com/Tomb-2501/blog-post-project");
});

app.get("/film-finder", (req, res) => {
  res.redirect("https://github.com/Tomb-2501/React-Film-Finder");
});

app.get("/jobs/:url", (req, res) => {
  const requestedUrl = req.params.url;
  employment.forEach(function (job) {
    const storedUrl = job.url;

    if (requestedUrl == storedUrl) {
      res.render("jobs.ejs", {
        job: job,
      });
    } else {
      return res.status(404);
    }
  });
});

app.get("/skills-and-interests/:url", (req, res) => {
  const requestedUrl = req.params.url;
  skillsAndInterests.forEach(function (sai) {
    const storedUrl = sai.url;

    if (requestedUrl == storedUrl) {
      res.render("template.ejs", {
        sai: sai,
      });
    } else {
      return res.status(404);
    }
  });
});

app.listen(port, () => {
  console.log(`Server now running on port ${port}.`);
});
