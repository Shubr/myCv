import Highlight from "./HighlightText";

function Contact() {
  return (
    <div className="contact-body">
      <h1>
        Co
        <Highlight text={"n"} color={"#FFB200"} />
        tact
      </h1>

      <div className="contact-input">
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="eMail" name="eMail" />
        <textarea typeof="text" placeholder="Description" name="description" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Contact;
