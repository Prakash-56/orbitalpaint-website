import nodemailer from "nodemailer";

// ─── HTML email sent to the person who submitted the form ───────────────────
function buildUserEmail(name: string, email: string, phone: string, company: string, message: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>We received your message ~ OrbitalPaint Solutions</title>
</head>
<body style="margin:0;padding:0;background-color:#e8f4f8;font-family:'Georgia',serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background:linear-gradient(160deg,#e8f4f8 0%,#ddeef5 100%);padding:40px 0;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" border="0"
          style="max-width:620px;width:100%;background:#ffffff;border-radius:20px;
                 overflow:hidden;border:1px solid #b8dde8;
                 box-shadow:0 20px 60px rgba(0,90,120,0.12);">

          <!-- Top accent bar -->
          <tr>
            <td style="height:5px;background:linear-gradient(90deg,#00b4d8,#0077b6,#03045e);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#03045e 0%,#0077b6 60%,#00b4d8 100%);
                        padding:48px 48px 40px;text-align:center;">
              <div style="display:inline-block;width:64px;height:64px;border-radius:50%;
                          border:2px solid rgba(144,224,239,0.5);
                          background:rgba(255,255,255,0.1);
                          line-height:64px;font-size:30px;margin-bottom:20px;">🎨</div>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;
                          letter-spacing:0.03em;font-family:'Georgia',serif;">
                OrbitalPaint Solutions
              </h1>
              <p style="margin:10px 0 0;color:#90e0ef;font-size:12px;
                         letter-spacing:0.18em;text-transform:uppercase;
                         font-family:Arial,sans-serif;">
                Premium Painting &amp; Coating Services
              </p>
            </td>
          </tr>

          <!-- Gold divider -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#f9c74f,#f3722c,#f9c74f);"></td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:44px 48px 0;">
              <h2 style="margin:0 0 14px;color:#0077b6;font-size:22px;font-weight:700;
                          font-family:'Georgia',serif;">
                Hello, ${name}! 👋
              </h2>
              <p style="margin:0;color:#4a5568;font-size:15px;line-height:1.8;
                         font-family:Arial,sans-serif;">
                Thank you for reaching out to
                <strong style="color:#03045e;">OrbitalPaint Solutions</strong>.
                We have successfully received your message and our team will respond
                within <strong style="color:#f3722c;">24-48 business hours</strong>.
              </p>
            </td>
          </tr>

          <!-- Teal divider -->
          <tr>
            <td style="padding:32px 48px 0;">
              <div style="height:1px;background:linear-gradient(90deg,transparent,#00b4d8,transparent);"></div>
            </td>
          </tr>

          <!-- Submission summary -->
          <tr>
            <td style="padding:28px 48px 0;">
              <p style="margin:0 0 16px;color:#90a0b0;font-size:11px;letter-spacing:0.18em;
                         text-transform:uppercase;font-family:Arial,sans-serif;">
                Your Submission Summary
              </p>

              ${[
                ["Full Name", name],
                ["Email",     email],
                ["Phone",     phone || "—"],
                ["Company",   company || "—"],
              ].map(([label, value]) => `
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="margin-bottom:10px;background:#f0f8ff;border-radius:10px;
                       border:1px solid #bee3f8;overflow:hidden;">
                <tr>
                  <td style="padding:12px 16px;width:110px;color:#0077b6;font-size:11px;
                              letter-spacing:0.08em;text-transform:uppercase;
                              font-family:Arial,sans-serif;white-space:nowrap;
                              background:#e1f3fc;border-right:2px solid #90e0ef;">
                    ${label}
                  </td>
                  <td style="padding:12px 16px;color:#1a202c;font-size:14px;
                              font-family:Arial,sans-serif;font-weight:500;">
                    ${value}
                  </td>
                </tr>
              </table>`).join("")}

              <!-- Message block -->
              <p style="margin:20px 0 8px;color:#90a0b0;font-size:11px;letter-spacing:0.18em;
                         text-transform:uppercase;font-family:Arial,sans-serif;">Your Message</p>
              <div style="background:#fffbf0;border:1px solid #f9c74f;border-left:4px solid #f9c74f;
                           border-radius:10px;padding:18px;color:#2d3748;font-size:14px;
                           line-height:1.8;font-family:Arial,sans-serif;">
                ${message}
              </div>
            </td>
          </tr>

          <!-- What happens next -->
          <tr>
            <td style="padding:32px 48px 0;">
              <div style="height:1px;background:linear-gradient(90deg,transparent,#bee3f8,transparent);"></div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 48px 0;">
              <p style="margin:0 0 20px;color:#90a0b0;font-size:11px;letter-spacing:0.18em;
                         text-transform:uppercase;font-family:Arial,sans-serif;">
                What Happens Next
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${[
                  ["✅", "#e6f9f0", "#00b09b", "Confirmed",       "Your enquiry is safely received and logged."],
                  ["🔍", "#eff8ff", "#0077b6", "Review",          "Our specialists will assess your requirements."],
                  ["📞", "#fffbf0", "#f3722c", "We'll Reach Out", "Expect a response within 24-48 business hours."],
                  ["🎨", "#f5f0ff", "#6d28d9", "Project Kick-off","We'll craft a tailored solution just for you."],
                ].map(([icon, bg, accent, title, desc]) => `
                <tr>
                  <td style="padding:0 0 12px;vertical-align:top;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0"
                      style="background:${bg};border-radius:10px;border-left:3px solid ${accent};overflow:hidden;">
                      <tr>
                        <td style="padding:12px 14px;width:32px;vertical-align:middle;font-size:18px;">
                          ${icon}
                        </td>
                        <td style="padding:12px 14px 12px 0;vertical-align:middle;">
                          <strong style="color:${accent};font-size:13px;font-family:Arial,sans-serif;
                                          display:block;margin-bottom:2px;">${title}</strong>
                          <span style="color:#4a5568;font-size:12px;font-family:Arial,sans-serif;">${desc}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`).join("")}
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:28px 48px 0;text-align:center;">
              <a href="mailto:connect@orbitalpaintsolutions.com"
                style="display:inline-block;padding:15px 40px;
                       background:linear-gradient(135deg,#0077b6,#03045e);
                       color:#ffffff;font-size:13px;font-weight:700;
                       letter-spacing:0.1em;text-decoration:none;border-radius:50px;
                       font-family:Arial,sans-serif;
                       border-bottom:3px solid #f9c74f;">
                CONTACT US DIRECTLY
              </a>
            </td>
          </tr>

          <!-- Contact info -->
          <tr>
            <td style="padding:28px 48px 0;">
              <div style="height:1px;background:linear-gradient(90deg,transparent,#bee3f8,transparent);"></div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 48px;text-align:center;">
              <p style="margin:0 0 6px;color:#718096;font-size:13px;font-family:Arial,sans-serif;">
                📧 <a href="mailto:connect@orbitalpaintsolutions.com"
                  style="color:#0077b6;text-decoration:none;font-weight:600;">
                  connect@orbitalpaintsolutions.com
                </a>
              </p>
              <p style="margin:0;color:#718096;font-size:13px;font-family:Arial,sans-serif;">
                📞 <a href="tel:+91 8523817445" style="color:#0077b6;text-decoration:none;font-weight:600;">
                  +91 8523817445
                </a>
              </p>
            </td>
          </tr>

          <!-- Bottom accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#f9c74f,#f3722c,#f9c74f);"></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f0f8ff;padding:22px 48px;text-align:center;
                        border-top:1px solid #bee3f8;">
              <p style="margin:0;color:#a0aec0;font-size:11px;line-height:1.6;
                         font-family:Arial,sans-serif;">
                © ${new Date().getFullYear()} OrbitalPaint Solutions. All rights reserved.<br/>
                You're receiving this because you submitted a CONNECT with us form on our website.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── HTML email sent to YOU (admin notification) ────────────────────────────
function buildAdminEmail(name: string, email: string, phone: string, company: string, message: string): string {
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>New Contact ~ OrbitalPaint Solutions</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background:linear-gradient(160deg,#f0f4f8,#e2ecf5);padding:32px 0;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" border="0"
          style="max-width:580px;width:100%;background:#ffffff;border-radius:16px;
                 overflow:hidden;border:1px solid #c8daea;
                 box-shadow:0 12px 40px rgba(0,80,120,0.1);">

          <!-- Top bar -->
          <tr>
            <td style="height:5px;background:linear-gradient(90deg,#00b4d8,#0077b6,#03045e);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#023e8a 0%,#0096c7 100%);padding:30px 40px;">
              <h1 style="margin:0;color:#fff;font-size:19px;font-weight:700;letter-spacing:0.02em;">
                📩 New Contact Form Submission
              </h1>
              <p style="margin:8px 0 0;color:#90e0ef;font-size:12px;">
                OrbitalPaint Solutions &mdash; ${timestamp} (IST)
              </p>
            </td>
          </tr>

          <!-- Gold separator -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#f9c74f,#f3722c,#f9c74f);"></td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:30px 40px 0;">
              ${[
                ["Name",    name,                    "#e1f3fc", "#0077b6"],
                ["Email",   email,                   "#e6f9f0", "#00b09b"],
                ["Phone",   phone || "Not provided", "#fffbf0", "#f3722c"],
                ["Company", company || "Not provided","#f5f0ff", "#6d28d9"],
              ].map(([label, value, bg, accent]) => `
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="margin-bottom:10px;border-radius:10px;background:${bg};
                       border:1px solid ${accent}44;overflow:hidden;">
                <tr>
                  <td style="padding:11px 14px;width:90px;color:${accent};font-size:11px;
                              text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;
                              vertical-align:top;background:${accent}18;
                              border-right:2px solid ${accent}55;">
                    ${label}
                  </td>
                  <td style="padding:11px 14px;color:#1a202c;font-size:14px;font-weight:500;">
                    ${value}
                  </td>
                </tr>
              </table>`).join("")}

              <!-- Message -->
              <p style="margin:20px 0 8px;color:#90a0b0;font-size:11px;text-transform:uppercase;
                         letter-spacing:0.12em;">Message</p>
              <div style="background:#fffbf0;border:1px solid #f9c74f;border-left:4px solid #f3722c;
                           border-radius:10px;padding:16px;color:#2d3748;font-size:14px;line-height:1.8;">
                ${message}
              </div>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="padding:28px 40px;text-align:center;">
              <a href="mailto:${email}?subject=Re: Your enquiry ~ OrbitalPaint Solutions"
                style="display:inline-block;padding:13px 34px;
                       background:linear-gradient(135deg,#0077b6,#023e8a);
                       color:#ffffff;font-size:13px;font-weight:700;
                       text-decoration:none;border-radius:50px;letter-spacing:0.08em;
                       border-bottom:3px solid #f9c74f;">
                REPLY TO ${name.toUpperCase()}
              </a>
            </td>
          </tr>

          <!-- Bottom bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#f9c74f,#f3722c,#f9c74f);"></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f0f8ff;padding:16px 40px;text-align:center;
                        border-top:1px solid #bee3f8;">
              <p style="margin:0;color:#a0aec0;font-size:11px;">
                OrbitalPaint Solutions &mdash; Internal Notification System
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Route handler ───────────────────────────────────────────────────────────
export async function POST(req: Request) {
  const { name, email, phone, company, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 1️⃣  Confirmation email → the person who submitted the form
    await transporter.sendMail({
      from: `"OrbitalPaint Solutions" <${process.env.MAIL_USER}>`,
      to: email,
      subject: `We received your message, ${name}! ~ OrbitalPaint Solutions`,
      html: buildUserEmail(name, email, phone, company, message),
    });

    // 2️⃣  Notification email → your inbox
    await transporter.sendMail({
      from: `"OrbitalPaint Solutions" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `📩 New enquiry from ${name} (${company || "—"})`,
      html: buildAdminEmail(name, email, phone, company, message),
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