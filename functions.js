window.onload = function() {
    /*variables*/
    var buttonElement = document.getElementById("click");
    var inputElement = document.getElementById('test');
    
    var myP = document.getElementById("myP");
    var myDiv = document.getElementById("myDiv");

    var myP2 = document.getElementById("myP2");
    var myDiv2 = document.getElementById("myDiv2");
    
    var myDiv3 = document.getElementById("myDiv3");
    var myDiv4 = document.getElementById("myDiv4");
    
    if (buttonElement) {
        buttonElement.addEventListener('click', third);
    }
    if (myP){
        myP.addEventListener('click', myFunction);
        
    }
    if (myP2){
        myP2.addEventListener('click', secondFunction, true);
    }
    if (myDiv4){
        myDiv4.addEventListener('click', finalFunction);
    }
    if (myDiv3) {
        myDiv3.addEventListener('click', resize);
    }
    
    /*functions*/
    function resize(){
        myDiv.style.height = ".8px";
        myDiv2.style.background= "orange";
    }
    function third(){
        var input = inputElement.value;
        alert("hello " + input);
    }
    
    function myFunction(){
        myDiv.style.background= 'yellow';
    }
    function secondFunction(){
       myP2.textContent = myP2.textContent += " I am learning to add to  the content of a div using event listeners.";
    }
    
    function finalFunction(){
        myDiv.style.background= 'pink';
        myDiv2.style.background= 'pink';
        myDiv3.style.background= 'pink';
        myDiv4.style.background= 'pink';
    }
}
