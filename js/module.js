import { BadBoy } from "./ados.model";

const badBoy = new BadBoy();

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const question = badBoy.getQcu();
	console.log("The question:", question);
  badBoy.returnResponse(question);
});