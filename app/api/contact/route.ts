import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummykey");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone, message } = body;

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone || phone.length < 6) {
      return NextResponse.json(
        { error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    // Send notification email
    // NOTE: Until you verify 1forge.in on resend.com/domains, emails can
    // only be sent to your own Resend signup email. After domain verification,
    // set CONTACT_EMAIL=studio@1forge.in in .env.local and update `from` to
    // use your verified domain (e.g. "1forge <contact@1forge.in>").
    const { data, error } = await resend.emails.send({
      from: "1forge <contact@1forge.in>",
      to: process.env.CONTACT_EMAIL || "studio@1forge.in",
      replyTo: email,
      subject: `New Contact Request from ${email}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px;">
          <div style="background: linear-gradient(135deg, #7c5cff 0%, #5f42e8 100%); padding: 28px 24px; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; font-size: 22px; margin: 0; font-weight: 600;">New Contact Request</h1>
            <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 6px 0 0;">Someone wants to start a project with 1forge</p>
          </div>
          
          <div style="background: #f8f8f8; padding: 28px 24px; border-radius: 0 0 16px 16px; border: 1px solid #eee; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e8; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; width: 100px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8e8e8; font-size: 16px; font-weight: 500;">
                  <a href="mailto:${email}" style="color: #7c5cff; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                <td style="padding: 12px 0; font-size: 16px; font-weight: 500;">
                  <a href="tel:${phone}" style="color: #221d1d; text-decoration: none;">${phone}</a>
                </td>
              </tr>
            </table>
            ${message ? `
            <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 10px; border: 1px solid #eee;">
              <p style="margin: 0 0 6px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #888;">Message</p>
              <p style="margin: 0; font-size: 15px; color: #221d1d; line-height: 1.5; white-space: pre-wrap;">${message}</p>
            </div>
            ` : ''}
            
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 10px; border: 1px solid #eee;">
              <p style="margin: 0; font-size: 13px; color: #888;">You can reply directly to this email to reach the customer at <strong>${email}</strong></p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
