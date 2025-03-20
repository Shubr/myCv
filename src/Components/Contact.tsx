import Highlight from "./HighlightText";

function Contact() {
  return (
    <div className="contact-body" id="Contact">
      <h1>
        Co
        <Highlight text={"n"} color={"#FFB200"} />
        tact
      </h1>
      <form action="https://formspree.io/f/xyzkrajl" method="POST">
        <div className="contact-input">
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="eMail" name="eMail" />
          <textarea
            typeof="text"
            placeholder="Description"
            name="description"
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
