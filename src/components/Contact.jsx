import "./Contact.css";

const contactLinks = [
  {
    label: "GITHUB",
    value: "@CAROSENEE",
    href: "https://github.com/CAROSENEE",
    type: "CODE",
  },
  {
    label: "LINKEDIN",
    value: "MD MOSHIUR RAHMAN SAJOL",
    href: "https://www.linkedin.com/in/md-moshiur-rahman-sajol-251188285/",
    type: "NETWORK",
  },
  {
    label: "EMAIL",
    value: "moshiur287rahman@gmail.com",
    href: "mailto:moshiur287rahman@gmail.com",
    type: "DIRECT",
  },
];

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-label">
          <span>05</span>
          ESTABLISH CONNECTION
        </div>

        <div className="contact-header">
          <div>
            <p className="contact-kicker">CONTACT_PROTOCOL</p>

            <h2>
              Let's build
              <br />
              <span>something secure.</span>
            </h2>
          </div>

          <div className="contact-intro">
            <p>
              Have an idea, project, collaboration, or simply want to connect?
              My communication channels are open.
            </p>

            <div className="contact-terminal">
              <span className="contact-prompt">$</span>
              <span> connection --status</span>
              <strong>READY TO RECEIVE</strong>
            </div>
          </div>
        </div>

        <div className="contact-grid">
          {contactLinks.map((item, index) => (
            <a
              href={item.href}
              target={item.label === "EMAIL" ? undefined : "_blank"}
              rel={item.label === "EMAIL" ? undefined : "noreferrer"}
              className="contact-card"
              key={item.label}
            >
              <div className="contact-card-top">
                <span className="contact-number">
                  0{index + 1}
                </span>

                <span className="contact-type">
                  {item.type}
                </span>
              </div>

              <div className="contact-card-body">
                <span className="contact-label">
                  {item.label}
                </span>

                <h3>{item.value}</h3>
              </div>

              <div className="contact-card-footer">
                <span>OPEN CHANNEL</span>
                <span className="contact-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>

        <div className="contact-signature">
          <span className="signature-icon">♻️</span>

          <div>
            <p>Weakness compels strength</p>
            <span>Build. Break. Learn. Rebuild stronger.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;