import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, contact, qualification, course } = data;

    // Gmail SMTP using secure App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // loaded from .env.local
        pass: process.env.MAIL_PASS, // loaded from .env.local
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER, // send to yourself
      subject: `New Application: ${name}`,
      html: `
        <h2>New Aerospace Training Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contact}</p>
        <p><strong>Qualification:</strong> ${qualification}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Country:</strong> India</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Application sent successfully" }),
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Failed to send application" }),
      { status: 500 }
    );
  }
}
