# CasparCG-Channel-Overlay
A Node and HTML based project to get overlays for clip name, time, duration and a countdown like on the old VTR machines, but this time on a CasparCG layer

### Overview
This project allows a two-channel CasparCG to have one channel for the on-air graphics, and another channel for seeing the info for the currently selected clip.
(You could of course use it in a million other ways, like just keying the overlay on from another computer).
The project consist of a node project, that receives the OSC commands from CasparCG and a HTML file (`client.html`) that can be used as the overlay.


## Setup
### Installation
1. Clone or download the code from this repository
2. From the terminal run install with your preferred package manager (eg. NPM `npm install`)
3. Run the project from the terminal (eg. Nodemon: `nodemon src/index.js` or just `node src/index.js)
4. On the machine running the node project, you can now open the `client.html` file and they connect on port 9898
5. To get data from CasparCG you need to modify your config file `casparcg.config` in the server folder to send OSC on port 6250 (either locally or add a client if your not on the CasparCG machine itself).

### How it works


### Usage
You don't need to use the CasparCG Client app, but used here as an easy example. We will use channel 1 as the playout and channel 2 as the monitor.
In the client app:
1. Optional: Got to the menu Edit->Settings and check the "Use freeze on load for video items" (this makes it easy to see loaded files in the overlay)
2. From the Tools menu in the Other category, pull a Route Video Layer item into your playlist
3. Set the output to channel 2 and keep the videolayer on layer 10 ....
4. 




## FAQ
*Why do we need a node project AND a html page?*
Since version ~2.2 of CasparCG OSC commands are only sent out as UDP, and browsers can't receive UDP commands due to security. 
That's why we need some "middleware" to convert between UDP and TCP (and also helps lowering the data amount being send to the browser)

*Why is it only monitoring layer 10?*
OSC sends out each layer separately, but if you need multiple layers monitored that would be possible (though what if different clips are loaded on different layers, what clip should be monitored?)


