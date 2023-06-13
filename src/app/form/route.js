const POSTMARK_API = process.env.NEXT_PUBLIC_POSTMARK_API;
const POSTMARK_EMAIL_FROM = process.env.NEXT_PUBLIC_POSTMARK_EMAIL_FROM;
const POSTMARK_EMAIL_TO=process.env.NEXT_PUBLIC_POSTMARK_EMAIL_TO;
const postmark = require("postmark");
const postmarkApp = new postmark.ServerClient(POSTMARK_API);

export async function POST(request) {
  // const { name, email, subject, message } = request.body;
  const data = await request.json();
  try {
    // const messageInfo = `\n---\n>>>from:${email} \n>>>name: ${name}`;
    const messageInfo = `\n---\n>>>from:${data.email} \n>>>name: ${data.name}`;
    postmarkApp.sendEmail({
        "From": POSTMARK_EMAIL_FROM,
        "To": POSTMARK_EMAIL_TO,
        "Subject": data.subject,
        "TextBody": `${data.message} ${messageInfo}`,
    });
  } catch (error) {
      response.status(400).send('Message not sent.');
      throw new Error(error);
  }
  const options = { status: 200 }
  return new Response(data, options);
}