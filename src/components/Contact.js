import React,{useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: <i>پیام فرستاده شد 😉</i>,
      confirmButtonText:'تایید',
      preConfirm: () => {
        window.location.reload()
      },
    })
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => console.log('Email send '))
      .catch((error) =>  console.log('Email Cant send ',error));
  }

  return (
    <section id="contact" className="contact-form">
      <div>
        <form
          name="contact"
          onSubmit={handleSubmit}
          >
          <h1 style={{fontSize:'30px'}}>
            تماس با من
          </h1>
          <p>
          پیام خود را بنویسید. خوشحال میشم با شما در ارتباط باشم. 
          </p>
          <div>
            <label htmlFor="name">
              نام
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              ایمیل
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              >
              پیام
            </label>
            <input
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button onClick={showSwal}>
            فرستادن پیام
          </button>
        
        </form>
      </div>
    </section>
  );
}