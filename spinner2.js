
let spinner = ['\r| ','\r/ ','\r- ','\r\\ ' ] //store here
let delayTime = 0 // box that time
for (const cursor of spinner) { //iterate over my actions of spinner
  setTimeout(() => {//set that function
    process.stdout.write(cursor)//parameter one make it move
  }, delayTime)//delay that time
  delayTime += 200//add to the counter so we can move it.
};



