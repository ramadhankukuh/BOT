exports.wait = () => {
	return`sᴀʙᴀʀ ʏᴀ ᴋᴀᴋ....`
}

exports.succes = () => {
	return`*sᴜᴄᴄᴇss!!*`
}

exports.lvlon = () => {
	return`ᴇɴᴀʙʟᴇ ʟᴇᴠᴇʟɪɴɢ`
}

exports.lvloff = () => {
	return`ᴅɪsᴀʙʟᴇ ʟᴇᴠᴇʟɪɴɢ`
}

exports.lvlnul = () => {
	return`ʟᴇᴠᴇʟ ᴍᴜ ᴋᴏsᴏɴɢ ᴡᴋᴡᴋ`
}

exports.lvlnoon = () => {
	return`ʟᴇᴠᴇʟ ᴅɪ ɢʀᴏᴜᴘ ʙᴇʟᴜᴍ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ`
}

exports.noregis = () => {
	return`ᴍᴀᴀᴘ ʏᴇ ᴋᴀᴋ.. sᴇʙᴇɴᴀʀɴʏᴀ ᴋᴀᴋᴀ\nʙᴇʟᴜᴍ ᴅᴀғᴛᴀʀ <ᴄᴏɴᴛᴏʜ>\n*!ᴠᴇʀɪғʏ*`
}

exports.baned = () => {
	return`ᴡᴋᴡᴋᴡ ᴅɪ ʙᴀɴɴᴇᴅ , ᴍᴀᴋᴀɴɴʏᴀ ᴋᴀʟᴏ ᴘᴀᴋᴇ ʙᴏᴛ ᴊᴀɴ ᴀɴᴇʜ ᴀɴᴇʜ`
}

exports.rediregis = () => {
	return`ᴋᴀɴ ᴋᴀᴍᴜ ᴅᴀʜ ᴛᴇʀᴅᴀғᴛᴀʀ ᴅɪ ᴅᴀᴛᴀʙᴀsᴇ ᴋᴜ`
}

exports.stikga = () => {
	return`ʏᴀʜ ɢᴀɢᴀʟ, ᴄᴏʙᴀ ᴜʟᴀɴɢɪ ʟᴀɢɪ`
}

exports.linkga = () => {
	return`ʟɪɴᴋ ɴʏᴀ ɴɢɢᴀ ᴠᴀʟɪᴅ ᴋᴀᴋ...`
}

exports.groupo = () => {
	return`ɢʀᴏᴜᴘ ᴏɴʟʏ`
}

exports.ownerb = () => {
	return`ᴏᴡɴᴇʀ ʙᴏᴛ ᴏɴʟʏ`
}

exports.ownerg = () => {
	return`ᴏᴡɴᴇʀ ɢʀᴏᴜᴘ ᴏɴʟʏ`
}

exports.admin = () => {
	return`ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴏɴʟʏ`
}

exports.badmin = () => {
	return`ᴍᴀᴀғ ɴɪʜ ʏᴇ.. ᴛᴀᴘɪ ᴀᴋᴜ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ`
}

exports.antiNsfwOn = () => {
	return`ɴsғᴡ ᴍᴏᴅᴇ ʙᴇʀʜᴀsɪʟ ɴʏᴀʟᴀ`
}

exports.antiNswfOff = () => {
	return`ɴsғᴡ ᴍᴏᴅᴇ ʙᴇʀʜᴀsɪʟ ᴅɪ ᴍᴀᴛɪᴋᴀɴ`
}



exports.nsfwoff = () => {
	return`ɴsғᴡ ɢᴀᴋ ᴀᴋᴛɪғ`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`ᴛᴇᴋs ɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ??..`
}

exports.wrongFormat = () => {
	return`ᴇʀʀᴏʀ ᴋᴀᴋ...`
}

exports.clears = () => {
	return`sᴜᴄᴄᴇss ᴄʟᴇᴀʀᴀʟʟ`
}

exports.pc = () => {
	return`*「❗」REGISTRASI*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`*「 REGISTRASI BERHASIL 」*\nUntuk User Info :\n\n*➸ Nama : ${namaUser}*\n*➸ Nomor : wa.me/${sender.split("@")[0]}*\n*➸ Umur : ${umurUser}*\n*➸ Waktu Pendaftaran : ${time}*\n\n*「SN」: ${serialUser}*\n_NOTE : Pesan ini sangat penting :v_`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
➸ *ɴᴀᴍᴀ* : ${pushname}
➸ *ɴᴏᴍᴏʀ* : wa.me/${sender.split("@")[0]}
➸ *xᴘ* : ${getLevelingXp(sender)}
➸ *ʟᴇᴠᴇʟ* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

Upgrade premium bosku, biar bebas gunain bot`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ᴀᴛᴍ* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ ɴᴀᴍᴀ : ${pushname}\n┃│➸ ɴᴏᴍᴏʀ : ${sender.split("@")[0]}\n┃│➸ ᴜᴀɴɢ : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}