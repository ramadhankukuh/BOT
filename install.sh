#!/usr/bin/bash

pkg update -y
pkg upgrade -y
pkg install wget -y
pkg install ffmpeg -y
pkg install nodejs -y
pkg install npm -y
pkg install tesseract -y
apt install nmap -y
npm i
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm audit fix

echo "[*] JANGAN LUPA SUBSCRIBE CHANNEL RURIBOTZ YAH/ NAH KETIK AJA node index / npm start"

#!/usr/bin/bash

figlet MechaBot system
echo -e "> Silahkan Ketik Enter Untuk Melanjutkan"
read enter
clear
echo -e "\033[1;33mSCRIPT INI GRATIS KOK, CUMA AMEL MINTA TOLONG\nJANGAN LUPA SUBSCRIBE YA\n CHANNEL YOUTUBE RURIBOTZ\033[0m\n"
echo -e "> enter to next"
read enter
clear
node index