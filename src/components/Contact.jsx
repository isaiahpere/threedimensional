import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./contactComponents/Map";

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

const Button = styled.button`
  background-color: #da4ea2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
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
  const [success, setSuccess] = useState(null);

  const handleForm = (e) => {
    e.preventDefault(); // stop refresh

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
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleForm} ref={form}>
            <Title>Contact Us</Title>
            <Input type="text" placeholder="Name" name="name" />
            <Input type="email" placeholder="Email" name="email" />
            <TextArea
              placeholder="Write Your Message"
              rows={10}
              name="message"
            />
            <Button type="submit" value="Send">
              Sent Message
            </Button>
            {success &&
              "Your message has been sent. We'll get back to you soon. :)"}
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
