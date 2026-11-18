export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    const token = "9124891075:AAG1S6XFzMdHyUQQ7_sYiKExGg1vewS_Z_U";
    const chatId = "1014774247";

    const message = `🔥 *NUEVO ALUMNO REGISTRADO (AUTOMÁTICO)* 🔥\n\n` +
      `📌 *Plan:* ${data.planName}\n` +
      `💰 *Monto:* $${data.amount} USDT\n` +
      `💳 *Método:* ${data.method}\n` +
      `✉️ *Email:* \`${data.email}\`\n` +
      `👤 *Telegram:* @${data.telegram.replace("@", "")}\n` +
      `🧾 *TxID / Ref:* \`${data.txId}\`\n\n` +
      `⏰ _${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST_`;

    const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!telegramRes.ok) {
      const err = await telegramRes.text();
      return new Response(JSON.stringify({ error: err }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
