function generateShape() {
  
      var num;
  
      do {
        
        num = prompt("Enter a number:");
        
      } while (isNaN(num) || num === null || num === "");
  

      num = parseInt(num);
  
      var result = "Number inputted: " + num + "<br>";

      for (var i = num; i >= 1; i--) {
        
        var line = "";
        
        for (var j = 0; j < (num % 2 === 1 ? num : i); j++) {
          
          line += i + " ";
          
        }
        
        result += line + "<br>";
        
      }

      document.getElementById("output").innerHTML = result;
  
}
