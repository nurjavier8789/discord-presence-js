const RPC = require("discord-rpc");
const client = new RPC.Client({transport: "ipc"});


const activity = {
  details: "TEXT_HERE",
  state: "testt",
  timestamps: {
    start: Date.now()
  }, //kalau mau ada durasinya
  
  assets: {
    large_image: "NAMA_GAMBAR",
    large_text: "TEKS_TERSERAH",
    small_image: "NAMA_GAMBAR",
    small_text: "TEKS_TERSERAH"
  },
  buttons: [
    //button ke 1
    {
      "label": "Text_here", //tulisan yang akan muncul di buttonnya
      "url": "https://discord.gg/gFuqDah" //link untuk buttonnya
    },
    //button ke 2
    {
      "label": "Join Discord Server Nge game!",
      "url": "https://discord.gg/nge-game"
    }
  ],

  instance: true
};

client.on("ready", () => {
  client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});
  console.log("Done"); //untuk penanda kalau berjalan .js nya
})

client.login({ clientId: "CLIENT_ID" });
