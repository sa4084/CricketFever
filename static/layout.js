window.onload = function() {    
    function search(keyword) {
        if(keyword.trim() == 0){
            document.getElementById("text").value = "";
            document.getElementById("text").focus();
        } else
        if (keyword != "") {
            location.href = `/results/${keyword}`;
        }
    }
    
    function validation(){
        let error = false;
        $('#name').focus()
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

    function addentry(){
        console.log("adding entry")
        // print(data)
        if(!validation()){
        let obj = {
                // "id": $('#ranking').val(),
                "ranking": $('#ranking').val(),
                "name": $('#name').val(),
                "image": $('#image').val(),
                "year": $('#year').val(),
                "teams": $('#teams').val().split(",").map(item => item.trim()),
                "summary": $('#summary').val(),
                "affiliations": $('#affiliations').val().split(",").map(item => item.trim()),
                "Otherteammates": $('#Otherteammates').val().split(",").map(item => item.trim()),
                "runs": $('#runs').val()           
                }
        console.log(obj)
        let size = Object.keys(data).length;
        $.ajax({
            type: "POST",
            url: "/add",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(obj),
            success: function () {
                // print(data)
                $('#success').show()
                $('#name').val('')
                $('#image').val('')
                $('#year').val('')
                $('#teams').val('')
                $('#summary').val('')
                $('#ranking').val('')
                $('#runs').val('')
                $('#affiliations').val('')
                $('#Otherteammates').val('')
                $("a").attr("href", "/view/" + (size + 1))

            },
            error: function (request, status, error) {
                console.log("Error");
                console.log(request)
                console.log(status)
                console.log(error)
            }
        });
    }
    }

    $('#Add').click(function(){
        console.log("added")
        location.href = `/add`;
    })

    $(document).ready(
        function () {
            // print(data)
            // print(id)
            $('#success').hide()
            $("#submit").click(function () {
                let str = $("#text").val();
                console.log("clicked button")
                search(str)
              });
            
              $(document).on('keypress',function(e) {
                if(e.which == 13) {
                    let str = $("#text").val();
                    console.log("clicked button")
                    search(str)
                }
            });
            $('#addnewentry').click(addentry)
           

        }
    ) }