import stylesContact from "./../Contact/Contact.module.css";

function Contact() {
  return (
    <div className={`${stylesContact.contact_wrapper} section`}>
      <div className={stylesContact.contact_info}>
        <h2>
          Contact <span>Me</span>{" "}
        </h2>
        <p>Let’s connect! I’m open to new projects and ideas.</p>

        <div className={stylesContact.contact_detail}>
          <i className="ri-map-pin-user-line"></i>
          <p>
            Address : <span>Győri kapu 146, 3532, Miskolc, Hungary</span>
          </p>
        </div>

        <div className={stylesContact.contact_detail}>
          <i className="ri-phone-line"></i>
          <p>
            Phone : <span>38-066-830-88-25</span>
          </p>
        </div>

        <div className={stylesContact.contact_detail}>
          <i className="ri-mail-send-line"></i>
          <p>
            Email : <span>noskinaolga1@gmail.com</span>
          </p>
        </div>
      </div>

      <div className={stylesContact.contact_form}>
        <form>
          <div className={stylesContact.input_container}>
            <div className={stylesContact.input_wrapper}>
              <input type="text" placeholder="Enter Name *" />
            </div>
            <div className={stylesContact.input_wrapper}>
              <input type="email" placeholder="Enter Email *" />
            </div>
            <div className={stylesContact.input_wrapper}>
              <input type="text" placeholder="Enter Subject *" />
            </div>
            <textarea placeholder="Message *"></textarea>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
