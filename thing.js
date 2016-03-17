(function Thing() {
  wasteSomeTime();
})();

function wasteSomeTime() {
  console.log("What's that thing? In about 3000ms that thing is gonna say something.");
  var timer =  setTimeout(function(){ makeCowSayThing(); }, 3000);
}

function makeCowSayThing() {
  const exec = require('child_process').exec;
  const child = exec("fortune | cowsay", (err, stdout, stderr) => {
    if (err) {
      console.log(`exec error: ${err}`);          
    }
    console.log(stdout);
  });
}
