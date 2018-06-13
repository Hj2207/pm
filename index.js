var lastClicked;
var grid = clickableGridFirst(1,10,function(el,i){
        console.log("You clicked on item #:",i);

         el.className='clicked';
     
});

        var heading1= document.createElement("h2");
        var textheading1 = document.createTextNode("Physically Impaired");
        heading1.appendChild(textheading1);
        document.body.appendChild(heading1);
        document.body.appendChild(grid);

function clickableGridFirst( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = "Slot " + ++i;
            cell.addEventListener('click',(function(el,i){
                return function(){
                    callback(el,i);
                }
            })(cell,i),false);
        }
    }
    return grid;
}




var lastClicked;
var grid = clickableGridSecond(1,10,function(el,i){
    console.log("You clicked on item #:",i);

    el.className='clicked';
});
var heading2= document.createElement("h2");
var textheading2 = document.createTextNode("Two Wheeler");
heading2.appendChild(textheading2);
document.body.appendChild(heading2);
document.body.appendChild(grid);

function clickableGridSecond( rows, cols, callback ){
    var i=10;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = "Slot " + ++i;
            cell.addEventListener('click',(function(el,i){
                return function(){
                    callback(el,i);
                }
            })(cell,i),false);
        }
    }
    return grid;
}




var lastClicked;
var grid = clickableGridThird(3,10,function(el,i){
    console.log("You clicked on item #:",i);

    el.className='clicked';

});
var heading3= document.createElement("h2");
var textheading3 = document.createTextNode("Four Wheeler");
heading3.appendChild(textheading3);
document.body.appendChild(heading3);
document.body.appendChild(grid);

function clickableGridThird( rows, cols, callback ){
    var i=20;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = " Slot " + ++i;
            cell.addEventListener('click',(function(el,i){
                return function(){
                    callback(el,i);
                }
            })(cell,i),false);
        }
    }
    return grid;
}







