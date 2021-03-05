var counter = 0 
var arr = [[0,0,0],
           [0,0,0],
           [0,0,0]]
var reset  = [[0,0,0],
             [0,0,0],
             [0,0,0]] 
var countX = 0 
var countO = 0
function verify(){
    if(checkAllcolomns()!== undefined || checkAllrows()!== undefined || checkAlldiagonals() !== undefined){
        document.getElementById('res').innerHTML = checkAllcolomns() || checkAllrows() || checkAlldiagonals() ; 
        endgame()
        if(document.getElementById('res').innerHTML === "X win play again??"){ countX++}
        if(document.getElementById('res').innerHTML === "O win play again??"){ countO++}
    }
}
function display(id){
    if(document.getElementById(id).innerHTML === ""){
    if(counter % 2 === 0){
        changeArrX(id)
        document.getElementById(id).innerHTML = "X" ;
        verify()
    }
    else {
        document.getElementById(id).innerHTML = "O"
        changeArrO(id)
        verify()
    }
    }
    counter++
}
var changeArrX = function(id){
    if(id === "b1"){arr[0][0]=1}
    if(id === "b2"){arr[0][1]=1}
    if(id === "b3"){arr[0][2]=1}
    if(id === "b4"){arr[1][0]=1}
    if(id === "b5"){arr[1][1]=1}
    if(id === "b6"){arr[1][2]=1}
    if(id === "b7"){arr[2][0]=1}
    if(id === "b8"){arr[2][1]=1}
    if(id === "b9"){arr[2][2]=1}
}
var changeArrO = function(id){
    if(id === "b1"){arr[0][0]=2}
    if(id === "b2"){arr[0][1]=2}
    if(id === "b3"){arr[0][2]=2}
    if(id === "b4"){arr[1][0]=2}
    if(id === "b5"){arr[1][1]=2}
    if(id === "b6"){arr[1][2]=2}
    if(id === "b7"){arr[2][0]=2}
    if(id === "b8"){arr[2][1]=2}
    if(id === "b9"){arr[2][2]=2}
}
// function for colomns 
function checkcolomn(col,v){
    var t = true 
    for(var i =0 ; i < 3 ; i++){
        if(arr[i][col] !== v){
            t = false 
        }
    }
    return t 
}
function checkcolomns(v){
    var t = false ;
    for(var i =0 ; i < 3 ; i++){
     t = t || checkcolomn(i,v) ; 
    }
    if(t === true && v === 1){return "X win play again??"}
    if(t === true && v === 2){return "O win play again??"}
}
function checkAllcolomns(){
   return  checkcolomns(1)|| checkcolomns(2)
}
/* function that check only one row*/
function checkrow(row,v){
    var t = true 
    for(var i =0 ; i < 3 ; i++){
        if(arr[row][i] !== v){
            t = false 
        }
    }
    return t 
}
/*function that check all rows*/
function checkrows(v){
var t = false ;
for(var i =0 ; i < 3 ; i++){
 t = t || checkrow(i,v) ; 
}
if(t === true && v === 1){return "X win play again??"}
if(t === true && v === 2){return "O win play again??"}
}
/*check all rows for 3*3 X/O game*/
function checkAllrows(){
    return checkrows(1)||checkrows(2)
}

function checktype(v){
 if(arr[0][0] === arr[1][1] && arr[1][1]=== arr[2][2]&& arr[0][0] === v ){
     return true 
 }
 if(arr[0][2] === arr[1][1] && arr[1][1]=== arr[2][0]&& arr[2][0] === v ){
    return true 
}
else { return false }
}
function checkdiagonal(v){
if( checktype(v) && v === 1){return "X win play again??"}
if( checktype(v) && v === 2){return "O win play again??"}
}
function checkAlldiagonals(){
    return checkdiagonal(1) || checkdiagonal(2)
}
var res = checkAllcolomns() || checkAllrows() || checkAlldiagonals() 
function endgame(){
    var inCase = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"]
    for(var i =0 ; i < inCase.length ; i++){
        var id = inCase[i]
        document.getElementById(id).innerHTML = ""
    }
    counter = 0 
    arr = reset 
}

