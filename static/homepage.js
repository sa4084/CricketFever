function displayNames(data){
    
    $("#homepage").empty()
    $("#homepage").append('<div class = "row maintitle">Game on ! 🔥</div>')
    $.each(data, function(i, x){
        if(i == 7 || i == 1){

        let new_name = $(`
        <a href = "/view/${x.id}"> 
        <div class="col-md-6 card">

        <div class="row"> 
        <div class="col-md-12" id ="xname"> ${x.name} </div>
        </div>

        <div class="row">
        <div class="col-md-6 homeimg"><img alt="Player Image: A spunky, chubby teenager with gelled hair shot to fame after leading India to glory in the Under-19 World Cup at Kuala Lumpur in early 2008. In an Indian team filled with saint-like icons" src = "${x.image}"/></div>
        <div class="col-md-6 hometext" id ="xdesc">${x.summary.substring(0, 90)}... </div>
        </div>
        </div>
        </a>
        `)
        $("#homepage").append(new_name)
        }
    })

    $.each(data, function(i, x){
        if(i == 9 || i == 2){

        let new_name = $(`
        <a href = "/view/${x.id}"> 
        <div class="col-md-6 card2">

        <div class="row"> 
        <div class="col-md-12" id ="xname"> ${x.name} </div>
        </div>

        <div class="row">
        <div class="col-md-6 homeimg"><img alt="PLess than thirty years before that enchanting Saturday night when Ravi Shastri’s voice rang through television sets all over India, when even the spunky and exuberant Indian youth " src = "${x.image}"/></div>
        <div class="col-md-6 hometext" id ="xdesc">${x.summary.substring(0, 90)}... </div>
        </div>
        </div>
        </a>
        `)
        $("#homepage").append(new_name)
        }
    })



}



$(document).ready(function(){
    displayNames(data)                        

})