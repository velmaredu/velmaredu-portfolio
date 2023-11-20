function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">
                <i className="fas fa-headset"></i> Get in <span>Touch</span>
            </h2>

            <div className="container">
                <img
                    draggable="false"
                    src="/assets/images/contact/contact.jpg"
                    alt=""
                />
                <form action="https://formspree.io/f/moqzenlb" method="POST">
                    <div className="form-group">
                        <div className="field">
                            <input type="text" name="name" placeholder="Name" required />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="field">
                            <input type="text" name="email" placeholder="Email" required />
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="field">
                            <input type="text" name="phone" placeholder="Phone" />
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="message">
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            <i className="fas fa-comment-dots"></i>
                        </div>
                    </div>
                    <button className="btn dark-blue" type="submit">
                        Submit<i className="fa fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact