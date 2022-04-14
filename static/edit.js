window.onload = function() { 
function edit(data, id){
    item = `

    <br>
    <div class="row">
    <div class="editspace">
    <div>
    <input type="hidden" placeholder="name" id="id" value="${data[id].id}">
    
    <div class="col-md-12">
    <input type="text" placeholder="name" id="name" value="${data[id].name}">
    </div>
    
    <div class="col-md-12">
    <input type="text" placeholder="ranking" id="ranking" value="${data[id].ranking}">
    </div>
    
    <div class="col-md-12">
    <input type="text" id="image" value="${data[id].image}" >
    </div>

    <div class="col-md-12">
    <input type="text" placeholder="runs" id="runs" value="${data[id].runs}" >
    </div>
    </div>

    <div class="row">
    <div class="col-md-12 left">
    <textarea placeholder="summary" id="summary" cols="113" rows="5"></textarea>
    </div>
    </div>

    <div class="row">

    <div class="col-md-12 left">
    <input type="text" value="${data[id].year}" placeholder="year" id="year">
    </div>
    <div class="col-md-12 left">
    <input type="text" value="${data[id].teams}" placeholder="teams" id="teams">
    </div>
    <div class="col-md-12 left">
    <input type="text" value="${data[id].affiliations}" placeholder="affiliations" id="affiliations">
    </div>
    <div class="col-md-12 left">
    <input type="text" value="${data[id].Otherteammates}" placeholder="Otherteammates" id="Otherteammates">
    </div>
    </div>
    <br>
    <span class="col-md-3 right">
    <button class="btn btn-secondary" id="discard"> Discard</button>

    <button class="btn btn-primary" id="update"> Submit</button>
    </span>
    
    `
    
    $('.edit-container').append(item)
}

function discard(){
    $("#dialog").dialog("open");
    $("#dialog").dialog({
        buttons : {
          "Yes" : function() {
            window.location.href = '/view/' + data[id].id;
          },
          "No" : function() {
            $(this).dialog("close");
          }
        }
      });

}

function validation(){
  let error = false;
  let name = $('#name').val()
  
  if(name.trim() == '' || name.length == 0){
      error = true;
      $('.ch-name').html('Name cannot be empty')
      $('.ch-name').css('color', 'red')
      $('#name').focus()
  }
  else{
      error = false
      $('.ch-name').html('')
  }

  let ranking =  $('#ranking').val()
  if(ranking.trim() == '' || ranking.length == 0){
      $('.ch-ranking').html('Ranking cannot be empty')
      $('.ch-ranking').css('color', 'red')
      if(!error) $('#ranking').focus()
      error = true;
  }
  else if(isNaN(ranking)){
      $('.ch-ranking').html('Ranking can only be number')
      $('.ch-ranking').css('color', 'red')
      if(!error) $('#ranking').focus()
      error = true;

  }
  else{
      error = false
      $('.ch-ranking').html('')
  }


  let image = $('#image').val()
  if(image.trim() == '' || image.length == 0){
      $('.ch-image').html('Image url cannot be empty')
      $('.ch-image').css('color', 'red')
      if(!error) $('#image').focus()
      error = true;

  }
  else{
      error = false
      $('.ch-image').html('')
  }

  let runs = $('#runs').val()  
  if(runs.trim() == '' || runs.length == 0){
      $('.ch-runs').html('Runs cannot be empty')
      $('.ch-runs').css('color', 'red')
      if(!error) $('#runs').focus()
      error = true;

  } 
  else if(isNaN(runs)){
      $('.ch-runs').html('Runs can only be number')
      $('.ch-runs').css('color', 'red')
      if(!error) $('#runs').focus()
      error = true;

  }
  else{
      error = false
      $('.ch-runs').html('')
  }


  let summary = $('#summary').val()
  if(summary.trim() == '' || summary.length == 0){
      $('.ch-summary').html('Player Description cannot be empty')
      $('.ch-summary').css('color', 'red')
      if(!error) $('#summary').focus()
      error = true;

  } 
  else{
      error = false
      $('.ch-summary').html('')
  }

  let year = $('#year').val()
  if(year.trim() == '' || year.length == 0){
      $('.ch-year').html('year cannot be empty')
      $('.ch-year').css('color', 'red')
      if(!error) $('#year').focus()
      error = true;

  }      
  else if(isNaN(year)){
      $('.ch-year').html('year can only be number')
      $('.ch-year').css('color', 'red')
      if(!error) $('#year').focus()
      error = true;

  }
  else{
      error = false
      $('.ch-year').html('')
  }

  let teams = $('#teams').val()
  if(teams.trim() == '' || teams.length == 0){
      $('.ch-teams').html('Teams cannot be empty')
      $('.ch-teams').css('color', 'red')
      if(!error) $('#teams').focus()
      error = true;

  } 
  else{
      error = false
      teams = $('#teams').val().split(",").map(item => item.trim())
      $('.ch-teams').html('')
  } 


  let affiliations = $('#affiliations').val()
  if(affiliations.trim() == '' || affiliations.length == 0){
      $('.ch-affiliations').html('Player Affiliations cannot be empty')
      $('.ch-affiliations').css('color', 'red')
      if(!error) $('#affiliations').focus()
      error = true;

  }  
  else{
      error = false
      affiliations = $('#affiliations').val().split(",").map(item => item.trim())
      $('.ch-affiliations').html('')
  }

  let otherteammates = $('#Otherteammates').val()
  if(otherteammates.trim() == '' || otherteammates.length == 0){
      $('.ch-otherteammates').html('Other teammates cannot be empty')
      $('.ch-otherteammates').css('color', 'red')
      if(!error) $('#Otherteammates').focus()
      error = true;
  }
  else{
      error = false
      otherteammates = $('#Otherteammates').val().split(",").map(item => item.trim())
      $('.ch-otherteammates').html('')
  }  


  if(!error) return false; 
  return error;
}

$('#Add').click(function(){
  console.log("added")
  location.href = `/add`;
})


function update(){
    console.log("entring update in edit.js")
    let obj = {
            "id": $('#id').val(),
            "ranking": $('#ranking').val(),
            "name": $('#name').val(),
            "image": $('#image').val(),
            "year": $('#year').val(),
            "teams": $('#teams').val(),
            "summary": $('#summary').val(),
            "affiliations": $('#affiliations').val(),
            "Otherteammates": $('#Otherteammates').val(),
            "runs": $('#runs').val()           
            }
    console.log(obj)
    $.ajax({
        type: "POST",
        url: "/edit",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(obj),
        success: function () {
            location.href = `/view/${id}`;
        },
        error: function (request, status, error) {
            location.href = `/view/${id}`;
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}



$(document).ready(function () {
    console.log(data[id])
    $('#id').hide()
    edit(data, id)
    $('#summary').html(data[id].summary)
    $("#dialog").dialog({
        autoOpen: false,
        modal: true
      });
    console.log(data[id].id)
    $('#discard').click(discard)
    $('#update').click(update)

  });
}