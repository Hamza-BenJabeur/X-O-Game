var counter = 0 
var arr = [[0,0,0],
           [0,0,0],
           [0,0,0]]
var reset  = [[0,0,0],
             [0,0,0],
             [0,0,0]] 
var countX = 0 
var countO = 0
function chefimo3afi(){
    if(checkcolomns()!== undefined || checkrows()!== undefined || checkdiag() !== undefined){
        document.getElementById('res').innerHTML = checkcolomns() || checkrows() || checkdiag() ; 
        endgame()
        if(document.getElementById('res').innerHTML === "X win"){ countX++}
        if(document.getElementById('res').innerHTML === "O win"){ countO++}
    }
}
function hbj(id){
    if(document.getElementById(id).innerHTML === ""){
    if(counter % 2 === 0){
        changeArrX(id)
        document.getElementById(id).innerHTML = "X" ;
        chefimo3afi()
    }
    else {
        document.getElementById(id).innerHTML = "O"
        changeArrO(id)
        chefimo3afi()
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
// functio for colomns 
function checkcolomn(col,v){
    var t = true 
    for(var i =0 ; i < 3 ; i++){
        if(arr[i][col] !== v){
            t = false 
        }
    }
    return t 
}
function checkcolomnse(v){
    var t = false ;
    for(var i =0 ; i < 3 ; i++){
     t = t || checkcolomn(i,v) ; 
    }
    if(t === true && v === 1){return "X win"}
    if(t === true && v === 2){return "O win"}
}
function checkcolomns(){
   return  checkcolomnse(1)|| checkcolomnse(2)
}
// function for rows 
function checkrow(row,v){
    var t = true 
    for(var i =0 ; i < 3 ; i++){
        if(arr[row][i] !== v){
            t = false 
        }
    }
    return t 
}
function checkrowse(v){
var t = false ;
for(var i =0 ; i < 3 ; i++){
 t = t || checkrow(i,v) ; 
}
if(t === true && v === 1){return "X win"}
if(t === true && v === 2){return "O win"}
}
function checkrows(){
    return checkrowse(1)||checkrowse(2)
}
// function for ink 
function checktype(v){
 if(arr[0][0] === arr[1][1] && arr[1][1]=== arr[2][2]&& arr[0][0] === v ){
     return true 
 }
 if(arr[0][2] === arr[1][1] && arr[1][1]=== arr[2][0]&& arr[2][0] === v ){
    return true 
}
else { return false }
}
function checkdiage(v){
if( checktype(v) && v === 1){return "X win"}
if( checktype(v) && v === 2){return "O win"}
}
function checkdiag(){
    return checkdiage(1) || checkdiage(2)
}
var res = checkcolomns() || checkrows() || checkdiag() 
function endgame(){
    var cas = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"]
    for(var i =0 ; i < cas.length ; i++){
        var id = cas[i]
        document.getElementById(id).innerHTML = ""
    }
    counter = 0 
    arr = reset 
}

