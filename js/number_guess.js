let random_number = Math.floor((Math.random())*100);
// console.log(random_number);
let counter = 1;
document.querySelector("button").addEventListener("click",get_user_value);

function get_user_value(){
    let user_guess = Number(document.querySelector("input").value);
    if (user_guess && 100>=user_guess >= 1){
        if (counter <= 6){
            if (user_guess>random_number) {
                document.querySelector("h3").innerHTML = "LOWER";
                counter++;
            }else if(user_guess<random_number){
                document.querySelector("h3").innerHTML = "HIGHER";
                counter++;
            }else{
                document.querySelector("#win-lose").innerHTML = "YOU WIN!";
                document.querySelector("#win-lose").style.color = "rgb(0, 140, 0)"
                document.querySelector("h3").remove();
                setTimeout(function(){ window. location. reload(); }, 2000);
            };
        }else{
            document.querySelector("#win-lose").innerHTML = "YOU LOST!";
            document.querySelector("#win-lose").style.color = "red"
            document.querySelector("h3").remove();
            setTimeout(function(){ window. location. reload(); }, 2000);
        }
    }else{
        document.querySelector("h3").innerHTML = "please enter a correct number";
    }
};