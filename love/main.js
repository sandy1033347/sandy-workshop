$(function(){
    var currentQuiz = null; //save current question
    $("#startButton").on("click",function(){
        if(currentQuiz == null){
            //show first question
            currentQuiz = 0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(function(element,index,array){
                $("#options").append(
                    `<input name='options' type='radio' value='$(index)'>
                    <lebel>${element[0]}</label><br><br>`
                );

                $("#startButton").attr("value","next");
            });
            
        }
        else {
            $.each($(":radio"),function(i,val){
                //console.log(i + ":" +val.checked);
                 if(val.checked){
                     if(isNaN(questions[currentQuiz].answers[i][1])){
                               var finalResult = questions[currentQuiz].answers[i][1]
                               $("#question").text(finalAnswers[finalResult][0]);
                               $("#options").empty();
                               $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                               currentQuiz = null;
                               $("#startButton").attr("value","重新開始")
                     }else{
                        // jump to questions[x]
                        //original data
                        debugger;
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
            questions[currentQuiz].answers.forEach(function(element,index,array){
                $("#options").append(`<input name='options' type='radio' value='${index}'>
                    <lebel>${element[0]}</label><br><br>`);

            });        
                     }
                     return false
                 }
            }

            );
              
        }
    })
 });