#!/bin/bash
export DISPLAY=:0
npm run go 1>&- 2>&- &
sleep 20
chromium-browser --kiosk 127.0.0.1:3000 1>&- 2>&- &
