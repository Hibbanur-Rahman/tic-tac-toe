var win = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [3, 6, 9], [2, 5, 8]]
console.log(win);
var player1 = [];
var player2 = [];
console.log(player1);
console.log(player2);
var x = document.getElementsByTagName("button");
console.log(x)
var y = document.getElementsByClassName("demo");
console.log(y);

var i = 1;
var flag = -1;
function myfunc(val) {
    if (flag == 1 || flag == 2 && flag!=3) {
        alert("you cannot play further more because the game is end");
    }
    else{
        if (i % 2 == 0) {
            player2.push(val);
            y[val - 1].innerHTML = "O";
            y[val - 1].style.fontSize = "50px";
            console.log(player2);
            console.log(win_dec(player2));
            if (win_dec(player2) == true) {

                for (var b = 0; b < 3; b++) {
                    x[a[b] - 1].style.backgroundColor = "green";
                }
                alert("player2 win");
                flag = 2;
            }
            i++;
        }
        else {
            player1.push(val);
            y[val - 1].innerHTML = "X";
            y[val - 1].style.fontSize = "50px";
            win_dec(player1);
            i++;
            console.log(player1);
            console.log(win_dec(player1));
            if (win_dec(player1) == true) {

                for (var b = 0; b < 3; b++) {
                    x[a[b] - 1].style.backgroundColor = "red";
                }
                alert("player1 win");
                flag = 1;
            }
        }
    }
}
var a = [];
function win_dec(z) {
    var count = 0;

    for (var k = 0; k < win.length; k++) {
        for (var l = 0; l < 3; l++) {
            for (var j = 0; j < z.length; j++) {
                const c = z.filter(value => value == z[j]);
                console.log(c);
                if (z[j] == win[k][l] && c.length == 1) {
                    count++;
                }
                if (count == 3) {
                    a = win[k];
                    console.log(a)
                    return true;
                }
            }
        }

        count = 0;
    }
    return false;
}


const playagain = document.getElementById('play');
function play() {
    for (var b = 0; b < player1.length; b++) {
        y[player1[b] - 1].innerHTML = "";
    }
    for (var b = 0; b < player2.length; b++) {
        y[player2[b] - 1].innerHTML = "";
    }
    for (var b = 0; b < 3; b++) {
        x[a[b] - 1].style.backgroundColor = "rgb(209, 227, 227)";
    }
    player1 = [];
    player2 = [];
    flag=3;

}
