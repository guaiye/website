// alert("The games are not available to play on mobile devices. Please use a different device to play if you are on mobile.");

// let adding_section = document.querySelector("#adding_game")
// // variable for adding game
// let button = document.querySelector("#add_button");
// let games_adding = document.querySelector("#game_input");
// let user_inpt = document.querySelector("#user_input");
// // Description
// let user_description
// let description = document.querySelector("#game_description")
// // Link input
// let link = document.querySelector("#game_link")
// let user_link;

// // Final edited
// let final_name;
// let name_section;
// let final_link;
// let link_section;
// let final_description

// let game_section = document.querySelector("#game_section")
// let div_adding;

// if (games_adding) {
//     games_adding.onchange = function(event) {
//         event.preventDefault();
//         // Links
//         user_inpt.value = games_adding.value;
//         user_link.value = link.value;
//         // description
//         user_description = description.value
//     };
// }

// if (button) {
//     button.onclick = function(event) {
//         event.preventDefault();
//         if (user_inpt.value === "") {
//             alert("No name input is detected");
//         }
//         else if(user_link.value === ""){
//             alert("Link does not exist");
//         } 
//         else {
//             // You can do something with the user's game input here (e.g., add it to a list, save it to a database, etc.).
//             alert("Game added: " + user_inpt.value);
//             div_adding = document.createElement("div")
//             game_section.appendChild(div_adding)

//             final_name = document.createElement("h2")
//             name_section =  div_adding.appendChild(final_name)
//             name_section.appendChild(user_inpt.value)

//             final_link = document.createElement("a")

//             final_description = document.createElement("p")
//             div_adding.appendChild(final_description)
//         }
//     };
// }


  let adding_section = document.querySelector("#adding_game");
  let button = document.querySelector("#add_button");
  let games_adding = document.querySelector("#game_input");
  let user_inpt = document.querySelector("#user_input");
  let user_description;
  let description = document.querySelector("#game_description");
  let link = document.querySelector("#game_link");
  let user_link; // Remove the previous definition of user_link

  let final_name;
  let name_section;
  let final_link;
  let link_section;
  let final_description;
  let game_section = document.querySelector("#game_section");
  let div_adding;

  if (games_adding) {
    games_adding.onchange = function(event) {
      event.preventDefault();
      user_inpt.value = games_adding.value;
      // Find the correct input element and assign it to user_link
      user_link = document.querySelector("#user_link");
      user_link.href = link.value;
      user_description = description.value;
    };
  }

  if (button) {
    button.onclick = function(event) {
      event.preventDefault();
      if (user_inpt.value === "") {
        alert("No name input is detected");
      } else if (user_link.href === "") { // Check href attribute for user_link
        alert("Link does not exist");
      } else {
        alert("Game added: " + user_inpt.value);
        div_adding = document.createElement("div");
        game_section.appendChild(div_adding);

        final_name = document.createElement("h2");
        name_section = div_adding.appendChild(final_name);
        name_section.textContent = user_inpt.value;

        final_link = document.createElement("a");
        final_link.href = user_link.href;
        final_link.textContent = "Play Now";
        div_adding.appendChild(final_link);

        final_description = document.createElement("p");
        final_description.textContent = user_description;
        div_adding.appendChild(final_description);
      }
    };
  }
