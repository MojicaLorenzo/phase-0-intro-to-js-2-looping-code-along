const names = ["Aki", "Bale", "Yuji"];
const event = "graduation"

function writeCards(names, event) {
  let messages = []
  for (let p = 0; p < names.length; p++) {
    
    messages.push (`Thank you, ${names[p]}, for the wonderful ${event} gift!`) 
    
  }
  return messages
}
writeCards(names, event)

function countDown(){
let countDown = 10; 
while (countDown > -1)
  console.log(countDown--)
}