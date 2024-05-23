import InitAccordeon from "./accordeon.js";

const howToLearn = document.querySelector(".how-to-learn");
const howToLearnAccord = new InitAccordeon(howToLearn);
howToLearnAccord.init();
howToLearnAccord.initVideos();
