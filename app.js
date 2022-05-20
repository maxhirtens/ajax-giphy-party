console.log("Let's get this party started!");


const $input = $('#search-box');
const $submit = $('#submit-button');
const $clear = $('#clear-button');
const $ul = $('ul');

// retrieve gif from api
function makeGif(res){
  let index = Math.abs(Math.floor(Math.random()*100-50)) ;
  console.log(index);
  const $li = $('<li>');
  const $img = $('<img>', {
    src: res[index].images.original.url
  });
  $li.append($img);
  $ul.append($li);
}

// append gif to DOM
$submit.on('click', async function(e){
  e.preventDefault();
  let gifType = $input.val();
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: gifType,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  makeGif(response.data.data);
  // console.log(response.data.data);
})

// clear all LI gifs
$clear.on('click', function(){
  $ul.empty();
})
