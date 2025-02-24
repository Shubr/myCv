import Highlight from "./HighlightText";

function Contact() {
  return (
    <div className="contact-body" id="Contact">
      <h1>
        Co
        <Highlight text={"n"} color={"#FFB200"} />
        tact
      </h1>
      <form>
        <div className="contact-input">
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="eMail" name="eMail" />
          <textarea
            typeof="text"
            placeholder="Description"
            name="description"
          />
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
