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
    if(checkAllcolomns()!== undefined || checkAllrows()!== undefined || checkdiagonals() !== undefined){
        document.getElementById('res').innerHTML = checkAllcolomns() || checkALLrows() || checkdiagonals() ; 
        endgame()
        if(document.getElementById('res').innerHTML === "X win"){ countX++}
        if(document.getElementById('res').innerHTML === "O win"){ countO++}
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
    if(t === true && v === 1){return "X win"}
    if(t === true && v === 2){return "O win"}
}
function checkAllcolomns(){
   return  checkcolomns(1)|| checkcolomns(2)
}

function checkrow(row,v){
    var t = true 
    for(var i =0 ; i < 3 ; i++){
        if(arr[row][i] !== v){
            t = false 
        }
    }
    return t 
}
function checkrows(v){
var t = false ;
for(var i =0 ; i < 3 ; i++){
 t = t || checkrow(i,v) ; 
}
if(t === true && v === 1){return "X win"}
if(t === true && v === 2){return "O win"}
}
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
if( checktype(v) && v === 1){return "X win"}
if( checktype(v) && v === 2){return "O win"}
}
function checkdiagonals(){
    return checkdiagonal(1) || checkdiagonal(2)
}
var res = checkAllcolomns() || checkAllrows() || checkdiagonals() 
function endgame(){
    var cas = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"]
    for(var i =0 ; i < cas.length ; i++){
        var id = cas[i]
        document.getElementById(id).innerHTML = ""
    }
    counter = 0 
    arr = reset 
}

