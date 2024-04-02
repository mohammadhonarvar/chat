// import { Container, Input } from "@mui/material";
// import React, { useState } from "react";
// import { data } from "../Profile-masenger/profile-main/data";
// const ariaLabel = { "aria-label": "description" };
// const phoneInput = document.getElementById("phoneInput");
// const PhoneValidate = () => {
//   const [profiledata, setProfiledata] = useState(data);
//   phoneInput.addEventListener("input", () => {
//     phoneInput.setCustomValidity("");
//     phoneInput.checkValidity();
//   });

//   phoneInput.addEventListener("invalid", () => {
//     if (phoneInput.value === "") {
//       phoneInput.setCustomValidity("شماره وارد کنید");
//     } else {
//       phoneInput.setCustomValidity(
//         "باید شماره تلفن به این شکل باشد:09151234567"
//       );
//     }
//   });

//   function validatePhoneNumber(input_str) {
//     const phoneRegex = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/;

//     return phoneRegex.test(input_str);
//   }
//   function CheckPassword(input_str) {
//     const passwordRegax =
//       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//     return passwordRegax.test(input_str);
//   }

//   function validateForm(event) {
//     const phone = document.getElementById("email_phone").value;
//     const password = document.getElementById("password").value;
//     if (!validatePhoneNumber(phone)) {
//       document.getElementById("phone_error").classList.remove("hidden");
//     } else {
//       if (!CheckPassword(password)) {
//         document.getElementById("password_error").classList.remove("hidden");
//       } else {
//         document.getElementById("password_error").classList.add("hidden");
//         alert("validation password success");
//       }
//       document.getElementById("phone_error").classList.add("hidden");
//     }
//     event.preventDefault();
//   }
//   return (
//     <Container>
//       {profiledata.map((item) => {
//         return (
//           <Input
//             disabled
//             defaultValue={item.number}
//             inputProps={ariaLabel}
//             id={"phoneInput"}
//             sx={{
//               color: "#292929",
//               fontWeight: "600",
//               fontSize: "16px",
//               lineHeight: "19px",
//               border: "none",
//             }}
//           />
//         );
//       })}
//     </Container>
//   );
// };

// export default PhoneValidate;
import { Input, Button } from "@mui/material";
import React, { useState } from "react";
import { data } from "../Profile-masenger/profile-main/data";
const ariaLabel = { "aria-label": "description" };

function PhoneValidate() {
  const [profiledata, setProfiledata] = useState(data);
  const [phone, setPhone] = useState("");
  const [newText, setNewText] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  function handleClick() {
    setNewText("save");
    setInputDisabled(true);
  }
  function validatePhoneNumber(input_str) {
    const phoneRegex = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/;
    return phoneRegex.test(input_str);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "email_phone") {
      setPhone(value);
      setPhoneError(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validatePhoneNumber(phone)) {
      setPhoneError(true);
    } else {
      alert("validation password success");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {profiledata.map((item) => {
        return (
          <Input
            id="email_phone"
            name="email_phone"
            onChange={handleChange}
            disabled={inputDisabled}
            defaultValue={item.number}
            inputProps={ariaLabel}
            sx={{
              color: "#292929",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "19px",
              border: "none",
            }}
          />
        );
      })}
      <Button
        gutterBottom
        variant="h6"
        onClick={handleClick}
        value={newText}
        component="div"
        sx={{
          color: "#929292",
          fontWeight: "500",
          fontSize: "13px",
          lineHeight: "15px",
        }}
      >
        Tap to change phone number
      </Button>
      {phoneError && <span id="phone_error">Invalid phone number</span>}
    </form>
  );
}

export default PhoneValidate;
