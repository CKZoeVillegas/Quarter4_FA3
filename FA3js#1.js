var contacts = [];

function updateDisplay() {
  
  document.getElementById("contactList").innerText = contacts.join(" ");
  
}

function addContact() {
  
  var name = document.getElementById("nameInput").value.trim();
  
  if (name !== "") {

  
    if (contacts.length >= 7) {
      
      contacts.shift();
      
    }
    
    contacts.push(name);
    
    updateDisplay();
    
    document.getElementById("nameInput").value = "";
    
  }
  
}

function removeContact() {
  
  contacts.pop();
  
  updateDisplay();
  
}
