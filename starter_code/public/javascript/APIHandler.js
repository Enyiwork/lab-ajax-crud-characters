class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
     $(".character-info").html(`<h2> Loading ... </h2>`);

     $.ajax({
        method: "GET",
        url: `${this.BASE_URL}/characters/`
     })
     .then((apiResult) => {
       console.log("SUCCESS");
       console.log(apiResult);

       $(".characters-container").empty();

       apiResult.forEach((onechar) => {
         $(".characters-container").append(`

         <div class="character-info">

           <div class="name">       ${onechar.name}       </div>
           <div class="occupation"> ${onechar.occupation} </div>
           <div class="debt">       ${onechar.debt}       </div>
           <div class="weapon">     ${onechar.weapon}     </div>
           <div class="id">ID:      ${onechar.id}         </div>
         </div>
       `);
      });
     })
     .catch((err) => {
       console.log("ERROR");
       console.log(err);
     });
  }

  getOneRegister (idNumber) {

    $.ajax({
      method: "GET",
      url: `${this.BASE_URL}/characters/${idNumber}`
    })
    .then((apiResult) => {
      console.log("SUCCESS");
      console.log(apiResult);

      $(".characters-container").empty();

      $(".characters-container").append(
         `
         <div class="characters-container">
           <div class="character-info">
             <div class="name">        ${apiResult.name}       </div>
             <div class="occupation">  ${apiResult.occupation} </div>
             <div class="debt">        ${apiResult.debt}       </div>
             <div class="weapon">      ${apiResult.weapon}     </div>
           </div>
         </div>
         `
       );
     })
    .catch((err) => {
      console.log("ERROR");
      console.log(err);

    });
  }
  deleteOneRegister (idNumberDelete) {
    $.ajax({
      method: "delete",
      url: `${this.BASE_URL}/characters/${idNumberDelete}`
    })
    .then((apiResult) => {
      console.log("SUCCESS");
      console.log(apiResult);
      $(".characters-container").empty();
      $(".delete-feedback").append(`
         <p> Deleted SUCCESS!</p>
         `);
    })
    .catch((err) => {
      console.log("ERROR");
      console.log(err);
      const updatedHTML=$(`<h2>ERROR</h2>`
      );
    });
  }
  createOneRegister ( charName, charJob, charWeapon, charDebt ) {
    $.ajax({
      method: "POST",
      url: `${this.BASE_URL}/characters/`,

      data: {
        name: charName,
        occupation: charJob,
        debt: charDebt,
        weapon: charWeapon,

      }
    })
    .then((apiResult) => {
      console.log("SUCCESS");
      console.log(apiResult);

      $(".characters-container").empty();
      $(".feedback").append(`
            <p> ${apiResult.name} </p>
            <p> ${apiResult.occupation} </p>
            <p> ${apiResult.weapon} </p>
            <p> ${apiResult.id} </p>
        `);
    })
    .catch((err) => {
      console.log("ERROR");
      console.log(err);
    });
  }

  updateOneRegister () {

  }


}
