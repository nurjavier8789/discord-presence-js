const RPC = require("discord-rpc");
const client = new RPC.Client({transport: "ipc"});


const activity = {
  details: "TEXT_HERE",
  state: "State", //optional
  timestamps: {
    start: Date.now()
  }, //if you want to add timer
  
  assets: {
    large_image: "YOUR_IMAGE_NAME", //image name you make from discord devs website!
    large_text: "IMAGE_TEXT", //this text will appear when you hovering the image
    small_image: "YOUR_IMAGE_NAME",
    small_text: "IMAGE_TEXT"
  },
  buttons: [
    //button 1
    {
      "label": "Button1", //this text will appear on the button
      "url": "https://google.com" //button link
    },
    //button 2
    {
      "label": "Button2",
      "url": "https://discord.gg"
    }
  ],

  instance: true
};

client.on("ready", () => {
  client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});
  console.log("Done"); //for make sure the code is working
})

client.login({ clientId: "CLIENT_ID" }); //client id is from your application at General Information tab
