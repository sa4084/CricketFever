
function displayNames(searched, cricketer_item){
    
  $("#text").focus()
  $("#results").empty()
  let check = $(`<div> 
  <div class ="results-title">Search Results for <span> "${cricketer_item['item']}" </span> </div>
  <span class="bold">${searched.length ? searched.length: "No"}</span> matches found</span></div>
  <br>
  `)
  $("#results").append(check)
  if(searched.length == 0) {

  } 
  else {$.each(searched, function(i, x){
      let new_name = $(`<div> 
      <div> <a href = "/view/${x.id}"> ${x.name} </a> </div> </div>`)
      $("#results").append(new_name)
    })
}
}
$(document).ready(function () {
  // print(searched)
  displayNames(searched, cricketer_item)
});
