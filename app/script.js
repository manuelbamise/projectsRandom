// access values in js
const inputText = document.querySelector('#inputText');
const submitBtn = document.querySelector('#submitBtn');
const displayText = document.querySelector('#displayText');
const errorMessage = document.querySelector('.errorMessage');
//const deleteBtn = document.querySelector('.deleteBtn');
const deleteAll = document.querySelector('#deleteAll');
const deleteItem = document.querySelector('.deleteItem');




//get info from clicking a btn
submitBtn.addEventListener('click', catchText)

//allow the enter key trigger the function
inputText.addEventListener('keypress',(event)=>{
  if (event.key === 'Enter'){
    catchText();
  }
})


function catchText(){
  const displayDiv = document.createElement('li');
  //creating a new htmlelement
  displayDiv.classList.add('listItem')

  //create new div element for trashcan
  const trashCan = document.createElement('button');
  
  displayDiv.innerText = inputText.value;

  if(!inputText.value){
    //if nothing is put into text box
    setTimeout(()=>{errorMessage.style.display = 'none'},2000);
    errorMessage.style.display = 'block';
  }else{
    displayText.append(displayDiv);
    if (displayDiv){
      trashCan.classList.add('fa-solid');
      trashCan.classList.add('fa-trash');
      trashCan.classList.add('deleteBtn');
      trashCan.classList.add('deleteItem');
      displayDiv.append(trashCan);
    }
    console.log(inputText.value);

  };

 
  deleteItem.addEventListener('click', deleteSingItem)
  function deleteSingItem(){
    displayText.removeChild(displayDiv)
}
};


