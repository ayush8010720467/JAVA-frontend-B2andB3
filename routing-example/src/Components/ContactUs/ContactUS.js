import "./ContactUs.css";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ContactUs(props) {
  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log(searchParams.get("hello"));
    if (params?.phone?.length !== 10) {
      setError("invalid Phone");
      setSearchParams({
        hello: searchParams.get("hello"),
        invalid: "invalid Phone",
      });
    }
  }, []);
  return (
    <>
      <h1>Contact Us</h1>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <p>Lorem sdfljkasdjfklajsdlkfjiawe csdkjfaclksdf cadsjfkasj</p>
      )}
    </>
  );
}
export default ContactUs;
