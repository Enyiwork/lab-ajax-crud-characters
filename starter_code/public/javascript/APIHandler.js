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

      apiResult.forEach((oneChar) => {
         $(".characters-container").append(`
           <div class="character-info">

             <div class="name">       ${onechar.name}       </div>
             <div class="occupation"> ${onechar.occupation} </div>
             <div class="debt">       ${onechar.debt}       </div>
             <div class="weapon">     ${onechar.weapon}     </div>

           </div>
           `);
        });
     })
    .catch((err) => {
      console.log("ERROR");
      console.log(err);

    });
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
