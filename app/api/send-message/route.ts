import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, company, message } = await req.json(); // ← phone added

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `New message from ${name} (${company})`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Message: ${message}
      `,
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Failed to send message." }),
      { status: 500 }
    );
  }
}
