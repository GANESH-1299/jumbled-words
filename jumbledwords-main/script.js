let ques=
[
    {
        jumbled:"wfnluosre",
        correct:"sunflower"
    },
    {
        jumbled:"sreo",
        correct:"rose"
    },
    {
        jumbled:"tsoul",
        correct:"lotus"
    },
    {
        jumbled:"yill",
        correct:"lily"
    },
    {
        jumbled:"iejmas",
        correct:"jasmine"
    },

]

let currentWord=0;
let score=0;

function displayWord()
{
    document.querySelector(".ques").innerText = 
    ques[currentWord].jumbled;

    document.querySelector(".score").innerText="SCORE :"+score;
}


displayWord();


function checkAnswer()
{
    
            let answer=document.querySelector("#inp").value;

            if(answer.toLowerCase()===ques[currentWord].correct.toLowerCase()){

                score++;

            }

            if(currentWord==ques.length-1){

                let msg="";

                if(score===5){
                    msg="Fabulous❤️ "+score;
                }
                else if(score===4){
                    msg="Fantastic😍  "+score
                }
                else if(score<4){
                    msg="Keep  try👍 "+score
                }

                alert(msg);

                location.reload();
            }
            else{
                currentWord++;
                displayWord();
                document.querySelector("#inp").value="";
            }

            

    
}