var intervalId;
var time;
var answeredCorrectly = 0;
var wrongAnswer = 5 - answeredCorrectly;

     //Function for starting the game
     
    $("#start_game").on("click", function() {

        $("#start_game").hide();

    // Object sets of questions/answers

    var quiz = [
        {
            question: "What story is Blade Runner based on?",
            choices: ["Do Androids Dream of Electric Sheep", "Cryptonomicon", "Mysteria", "Terminal Leathality"],
            answer: "Do Androids Dream of Electric Sheep",
            number: 0
        },
        {
            question: "What corporation is responsible for replicants?",
            choices: ["Microsoft", "Google", "Tyrell", "Amazon"],
            answer: "Tyrell",
            number: 1
        },
        {
            question: "The year the Blade Runner remake is set in.",
            choices: ["2048", "2049", "2018", "2064"],
            answer: "2049",
            number: 2
        },
        {
            question: "What are the cars in Blade Runner called?",
            choices: ["ships", "transports", "helos", "spinners"],
            answer: "spinners",
            number: 3
        }, 
        {
            question: "What is the famous origami animal creation?",
            choices: ["bear", "bird", "unicorn", "whale"],
            answer: "unicorn",
            number: 4
        }
        ];
    
        //Set up the form in HTML
        $("#question_div").html("<form>");

        // Cycle through the quiz array and grab the questions
        for (var i = 0; i < quiz.length; i++) {

            // Place the questions into the div
            $("#question_div").append("<p><h3> " + quiz[i].question + "</h3></p>");
            

            //While cycling through, grab the choices from each array object and give them a radio button  
            for (var j = 0; j < quiz[i].choices.length; j++) {
        
                var radioButton = "<input type='radio' class='radioButton'> " +  quiz[i].choices[j]; + "" + "<br>"   
                $("#question_div").append(radioButton + "<br>");
                

            if (quiz[i].number == 0) {
                
                $(".radioButton").attr("name", 'question1');
                $(".radioButton").addClass("newbutton1");               
                $(".newbutton1").removeClass("radioButton");
                $(".newbutton1").attr("value", quiz[i].choices[j]);
                
            }
            else if (quiz[i].number == 1) {
                
                $(".radioButton").attr("name", 'question2');
                $(".radioButton").addClass("newbutton2");
                $(".newbutton2").removeClass("radioButton");

            }
            else if (quiz[i].number == 2) {
                
                $(".radioButton").attr("name", 'question3');
                $(".radioButton").addClass("newbutton3");
                $(".newbutton3").removeClass("radioButton");

            }

            else if (quiz[i].number == 3) {
                
                $(".radioButton").attr("name", 'question4');
                $(".radioButton").addClass("newbutton4"); 
                $(".newbutton4").removeClass("radioButton");

            }

            else if (quiz[i].number == 4) {
                
                $(".radioButton").attr("name", 'question5');
                $(".radioButton").addClass("newbutton5");
                $(".newbutton5").removeClass("radioButton");

            } 
        }    
    };
    $("#question_div").append("<br><input type='submit' display='Submit'></input></form>");
});

//Function for a timer

//Function for checking answer selected vs Array answer

//Function for ending game and displaying correct/incorrect answers

//Function for resetting the game

    
