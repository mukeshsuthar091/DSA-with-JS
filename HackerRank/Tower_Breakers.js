function towerBreaker(n,m){
    if(m==1 || n%2==0){
        return 2;
    }
    else{
        return 1;
    }
}

// let win = towerBreaker(2,4);
let win = towerBreaker(3,6);

if(win==1){
    console.log("Player 1 win");
}else{
    console.log("Player 2 win");
}