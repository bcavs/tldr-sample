import { useState, useRef, useCallback, useEffect } from "react";
import { HomepageStyles } from "@styles";
import { string } from "yup";
import { Looper } from "@components";

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
  SuccessText,
} = HomepageStyles;

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //send email to api on button click
  const handleSubmit = async (e) => {
    setSuccess(false);
    setError(false);
    e.preventDefault();

    const emailValidation = string().email().required();

    emailValidation.isValid(email).then(function (valid) {
      if (!valid) {
        setError(true);
        return;
      }

      setSuccess(true);

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
            onChange={(e) => {
              setSuccess(false);
              setEmail(e.target.value);
            }}
          />
          <button onClick={(e) => handleSubmit(e)}>
            <ButtonText>Subscribe</ButtonText>
          </button>
          {error && <ErrorText>Invalid email</ErrorText>}
          {success && <SuccessText>You've subscribed</SuccessText>}
        </FormControl>
      </CopyContent>
      <DecorativeContent>
        <Gradient />
        <Looper speed={10} direction="left">
          <span>📱</span>
          <span>👨‍💻</span>
          <span>🚀</span>
          <span>🧬</span>
          <span>🤖</span>
        </Looper>
        <Looper speed={20} direction="left">
          <span>🧬</span>
          <span>🤖</span>
          <span>🚀</span>
          <span>📱</span>
          <span>👨‍💻</span>
        </Looper>
        <Looper speed={7} direction="left">
          <span>👨‍💻</span>
          <span>🚀</span>
          <span>🤖</span>
          <span>📱</span>
          <span>🧬</span>
        </Looper>
        <Looper speed={16} direction="left">
          <span>📱</span>
          <span>🧬</span>
          <span>🚀</span>
          <span>🤖</span>
          <span>👨‍💻</span>
        </Looper>
      </DecorativeContent>
    </HomepageContainer>
  );
}
