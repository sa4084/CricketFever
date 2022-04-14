function getprofile(data, id){

    //empty old data
    $("#profile").empty()
    // <a id = "edit" href="/edit/${data[id].id}">edit</a>
    // <div id = "profile-id">${data[id].id}</div>
    //insert all new data
    let item = `
    <div id = "profile-name">
    <div class = "view-item" id="vk">${data[id].name}<a id = "edit" href="/edit/${data[id].id}">edit</a>
    </div>
    </div>

    <div class="group1">
    <div id = "profile-image"><img alt="Player Image" src="${data[id].image}" srcset=""></div>
    <div class="prof" id = "profile-ranking"><span class = "view-ranking">Ranking: </span>${data[id].ranking}</div>
    <div class="prof" id = "profile-runs"><span class = "view-item">Total ODI Runs: </span>${data[id].runs}</div>
    <div class="prof" id = "profile-year"> <span class = "view-item">Debut Year :</span> ${data[id].year}</div>
    <div class="prof" id = "profile-teams"> <span class = "view-item">Playing for Teams :</span> <a href="/results/${data[id].teams}"> ${data[id].teams}</a></div>
    <div class="prof" id = "profile-teammates"> <span class = "view-item">Other Teammates :</span> ${data[id].Otherteammates}</div>
    
    </div>
    ` 
    $("#profile").append(item);



    $("#profile").append(`
    <div id = "profile-summary"> <div class = "view-item">Player Details: </div>${data[id].summary}</div>
    `)

    $("#profile").append(`<div class="view-item" id="brand">Brands: <span id="aff"><a href="/results/${data[id].affiliations}">${data[id].affiliations}</a></span></div>`) 

}

$(document).ready(function(){
    $('#profile-id').hide()
    console.log(data[id])
    getprofile(data, id)                        
})