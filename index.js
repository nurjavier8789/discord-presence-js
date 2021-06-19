const RPC = require("discord-rpc");
const client = new RPC.Client({transport: "ipc"});


const activity = {
  details: "Waiting for opening game...",
  assets: {
    large_image: "loading",
    large_text: "Waiting...",
    small_image: "discord_verified",
    small_text: "Verified"
  },
  buttons: [
    {
      "label": "Join my discord server",
      "url": "https://discord.gg/gFuqDah"
    },
    {
      "label": "Join Discord Server Nge game!",
      "url": "https://discord.gg/nge-game"
    }
  ],

  instance: true
};

client.on("ready", () => {
  client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});
  console.log("Done");
})

client.login({ clientId: "847741995178131476" });