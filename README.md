# CasparCG-Channel-Overlay
A Node and HTML based project to get overlays for clip name, time, duration and a countdown like on the old VTR machines, but this time on a CasparCG layer

### Overview
This project allows a two-channel CasparCG to have one channel for the on-air graphics, and another channel for seeing the info for the currently selected clip.
(You could of course use it in a million other ways, like just keying the overlay on from another computer).
The project consist of a node project, that receives the OSC commands from CasparCG and a HTML file (`client.html`) that can be used as the overlay.

## Installation
1. Clone or download the code from this repository
2. From the terminal run install with your preferred package manager (eg. NPM `npm install`)
3. Run the project from the terminal (eg. Nodemon: `nodemon src/index.js` or just `node src/index.js)

## 

## Setup

## FAQ
*Why do we need a node project AND a html page?*
Since version ~2.2 of CasparCG OSC commands are only sent out as UDP, and browsers can't receive UDP commands due to security. 
That's why we need some "middleware" to convert between UDP and TCP (and also helps lowering the data amount being send to the browser)
