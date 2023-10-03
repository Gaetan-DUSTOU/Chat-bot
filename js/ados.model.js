export class BadBoy {
  constructor() {}

  getQcu() {
    let question = document.querySelector('#question').value;
    return question;
  }

  updateResponse(responseTexte) {
    let responseElement = document.querySelector('#responseTexte');
    responseElement.textContent = responseTexte;
  }

  returnResponse(question) {
    const regexNorm = /^[A-Z][a-z\s]+\s\?/;
    const regexCrier = /^[A-Z\s]+[A-Z]$/;
    const regexInsist = /^[A-Z\s]+\s\?+$/;
    const regexAny = /.*/;
    const regexEmpty = /^$/;

    let response;
    
    if (regexInsist.test(question)) {
      response = "Calmez-vous, je sais ce que je fais !";
    }else if (regexCrier.test(question)) {
        response = "Whoa, calmos !";
        
    }else if(regexNorm.test(question)) {
      response = "Bien sûr.";
      
    }else if(regexEmpty.test(question)) {
      response = "Bien, on fait comme ça !";
      
    }else if(regexAny.test(question)) {
      response = "Peu importe !";
    
    }else{
      response = "GGGggggggghhhh !";
    }

    this.updateResponse(response);
    console.log(response);
  }
}





