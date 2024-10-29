const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+92 327 1097484";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,+92 327 1097484";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_21_10_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICA3MyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MixcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgODQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICA0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNoSVYwK1F0VWVFcHhnR1lGSThzRmU1WUtpUW1kcnRpK0pNcmsvYTBsZTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjcxMDk3NDg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NkY4QzMxNzk4OTY3MkVCQzA3MEIxMEUyRjQwOUM1RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzAyMDA4OTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzEwOTc0ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdGMkEyRjNGRjAzMjQ3Qzk0NDhBRTMxRDZEMTY1MTJGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDIwMDg5NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1eW80WTJhTVFEeWMySkFSQUVMNHRBXCIsXG4gIFwicGhvbmVJZFwiOiBcImRmMmY1YTAxLTg4ZjItNGEyMS1hOWIwLTE1NDY0YzFiMTA4N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgOTUsXG4gICAgICAyNixcbiAgICAgIDEwOCxcbiAgICAgIDE5MSxcbiAgICAgIDE2NyxcbiAgICAgIDE3NSxcbiAgICAgIDEwLFxuICAgICAgMjU0LFxuICAgICAgMjM1LFxuICAgICAgMTgzLFxuICAgICAgMjMxLFxuICAgICAgNzAsXG4gICAgICAyMjAsXG4gICAgICA0NyxcbiAgICAgIDEyNSxcbiAgICAgIDYyLFxuICAgICAgMTUzLFxuICAgICAgMjQzLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgNzAsXG4gICAgICAyMyxcbiAgICAgIDQ0LFxuICAgICAgMTc4LFxuICAgICAgMjIxLFxuICAgICAgNDIsXG4gICAgICAxNzAsXG4gICAgICAyNyxcbiAgICAgIDcyLFxuICAgICAgMjM2LFxuICAgICAgMTE2LFxuICAgICAgMTY3LFxuICAgICAgMTksXG4gICAgICAzNCxcbiAgICAgIDUsXG4gICAgICA0OSxcbiAgICAgIDcyLFxuICAgICAgNDUsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkQ5MUFUWjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3MTA5NzQ4NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2FpRlwiLFxuICAgIFwibGlkXCI6IFwiNjA1NTk2MjYwOTY4Njk6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJNnJ5YzBGRUxTS2c3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInU3eWJ2OHRJM20rbjVaLzVuM0o4MU04VmFqUjUxenNBMHg0dlBVZlgyVms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMnVUVVZDZWJOQ1c4Yk1oZjc2a1pQMnZNLytYdW4zY0pkL0dkc0llWEU2YitXQXhONGkxWHJ6TGw2UFF1WEE5Tklob25MRjMrVm03MzZDcDYydGdDQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOWJOWnY4YTZQTjVURGdtMjhqSUpoRVZERkUrN3FLREs2QW1rME4ySWF4NDhpdVI0NWd3ek1LVHFkaEY0VFZtRXl4NjZ4b0pTT1drdHhWRVJHR2JQaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjcxMDk3NDg0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMjAwODg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEpaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMSlouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrZ1lLU0NjSkdialhSQ0JsdTNKYUZxYkNuRGVMM1VEZGx6V2ZmUUVMVzZrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDQ4NTk1MzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDIwMDg4OTMyNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "sufi",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "+92 327 1097484",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
