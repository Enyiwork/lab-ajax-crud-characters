const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
     console.log("Fetch-all");
     charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
     console.log("Fetch-one");
      event.preventDefault();
      const idNumber = $("#character-id").val();
      charactersAPI.getOneRegister(idNumber);
  });

  $('#delete-one').on('click', (e) => {
     console.log("delete-one");
  });

  $('#edit-character-form').on('submit', (e) => {
     console.log("edit-char");
  });

  $('#new-character-form').on('submit', (e) => {
     console.log("new-char");
  });
});
