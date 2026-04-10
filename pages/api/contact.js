import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, lastName, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Champs requis manquants" });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jules.lemorvan01@gmail.com",
      subject: `Nouveau message de ${name} ${lastName || ""}`,
      text: `De : ${name} ${lastName || ""} (${email})\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Erreur lors de l'envoi" });
  }
}
