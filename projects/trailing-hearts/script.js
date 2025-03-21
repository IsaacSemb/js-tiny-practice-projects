// get our body element so as to manipulate it
const bodyElement = document.querySelector("body");

// add event listener to it
bodyElement.addEventListener(
  // event to detect (on every pixel move of the move)
  "mousemove",
  // what to do on clicking
  (event) => {
    // console.log('move');

    // set variables to keep track of the positions of the mouse
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    // create an element and append it
    const spanElement = document.createElement("span");

    // postion your new span element at the position of your cursor
    spanElement.style.left = xPos + "px";
    spanElement.style.top = yPos + "px";

    // then show it on screen
    bodyElement.append(spanElement);

    // randomsing the heart looks
    // like size and colour
    const heartSize = Math.random() * 100; // number will always be 100 and below

    // set your heart size to that size
    spanElement.style.height = heartSize + "px";
    spanElement.style.width = heartSize + "px";

    // remove the element from memory after some time
    setTimeout(
      //call back function to call
      () => {
        // call the remove function
        spanElement.remove();
      },
      // after how long
      3000
    );
  }
);
