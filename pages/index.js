import React, { useState } from "react";
import { HomepageStyles } from "@styles";
import { array, object, string, number } from "yup";

const {
  HomepageContainer,
  TLDR,
  CopyContent,
  DecorativeContent,
  Headline,
  Subhead,
  FormControl,
  ButtonText,
  Gradient,
  ErrorText,
} = HomepageStyles;

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  //send email to api on button click
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValidation = string().email().required();

    emailValidation.isValid(email).then(function (valid) {
      if (!valid) {
        console.log("is not valid", email);
        setError(true);
        return;
      }

      setError(false);

      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    });
  };

  return (
    <HomepageContainer>
      <CopyContent>
        <TLDR>
          <span>T</span>
          <span>L</span>
          <span>D</span>
          <span>R</span>
        </TLDR>
        <Headline>Byte sized news for busy techies</Headline>
        <Subhead>
          Free daily newsletter of the most interesting stories in startups 🚀,
          tech 📱, and programming 💻!
        </Subhead>
        <FormControl hasError={error}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={(e) => handleSubmit(e)}>
            <ButtonText>Subscribe</ButtonText>
          </button>
          {error && <ErrorText>Invalid email</ErrorText>}
        </FormControl>
      </CopyContent>
      <DecorativeContent>
        <Gradient />
        <p>images</p>
      </DecorativeContent>
    </HomepageContainer>
  );
}
