import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

import Map from "./contactComponents/Map";
import Button from "./global/Button";
import Toast from "./global/Toast";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  scroll-behavior: smooth;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 100vw;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

const Input = styled.input`
  padding: 12px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 4px;
  resize: vertical;
`;

const Right = styled.div`
  flex: 1;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Contact = () => {
  // ref
  const form = useRef();
  const [success, setSuccess] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault(); // stop refresh
    if (!name || !email || !message) return;

    emailjs
      .sendForm(
        "service_ybrcmtw",
        "template_qjxktbo",
        form.current,
        "rleL-0XZBsgtUIwre"
      )
      .then(
        (result) => {
          setSuccess(true);
          console.log(result.text);
        },
        (error) => {
          setSuccess(false);
          console.log(error.text);
        }
      );

    // reset form values
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Section id="contact-section">
      <Container>
        <Left>
          <Form onSubmit={handleForm} ref={form}>
            <Title>Contact Me</Title>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextArea
              placeholder="Write Your Message"
              rows={10}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button fullWidth type="submit" value="Send">
              Sent Message
            </Button>
            {success && (
              <Toast>
                Your message has been sent. We'll get back to you soon. 😃
              </Toast>
            )}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
