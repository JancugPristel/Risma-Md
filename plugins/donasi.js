let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
┏──「 Donasi • Dana 」─⬣
│ • Gopay : 082322980618
│ • Dana : Lupa😅
╰────────⬣
┏──「 *NOTE* 」─
│ > Ingin donasi? wa.me/6282138729360
│ _Hasil donasi akan digunakan buat beli sc_
│ _atau beli RDP/VPS agar bot bisa jalan_
│ _24jam tanpa kendala termakasih yg udh donate:)_
┗────────⬣
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
