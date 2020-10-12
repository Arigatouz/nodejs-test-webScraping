const express = require("express");
const request = require("request");
const cheerio = require("cheerio");
const PORT = 5000;
const app = express();

request(
  "https://huddle-landing-page-with-curved-liart.vercel.app/",
  (error, respond, html) => {
    if (!error && respond.statusCode == 200) {
      const $ = cheerio.load(html);
      const body = $("section");

      // const output = body.children("h2").next().html();
      body.each((i, el) => {
        const item = $(el).find("h2").text();
        console.log(item);
      });
      // console.log(output);
    } else {
      console.log(error);
    }
  }
);
