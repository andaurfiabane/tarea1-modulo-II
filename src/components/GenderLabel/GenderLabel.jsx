import "./GenderLabel.css";

function GenderLabel({ gender }) {
 
  let genderClass = "label-hombre";

  const nGender = gender.toLowerCase();

  if (nGender === "mujer") {
    genderClass = "label-mujer";
  } else if (nGender === "unisex") {
    genderClass = "label-unisex";
  }

  return (
    <span className={`gender-label ${genderClass}`}>
      {gender}
    </span>
  );

}

export default GenderLabel;