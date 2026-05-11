import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Page3.css";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = async () => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: "",
          message:
            "",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent!");
      setEmailSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = async () => {
    setIsOpen(true);

    if (!emailSent) {
      await sendEmail();
    }
  };

  return (
    <div className="love-page">
      <div className="envlope-wrapper">
        <div id="envelope" className={isOpen ? "open" : "close"}>
          <div className="front flap"></div>
          <div className="front pocket"></div>

          <div className="letter">
            <div className="words line1">To: Crush 💖</div>

            <div className="words line2">
              Dear crush, you are so beautiful
            </div>

            <div className="words line3">
              That every time I see you
            </div>

            <div className="words line4">
              my world stops 💕
            </div>
          </div>

          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </div>
      </div>

      <div className="reset">
        <button onClick={handleOpen}>Open</button>

        <button onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
}