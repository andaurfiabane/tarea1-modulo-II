import "./GenderLabel.css";

function GenderLabel({ gender }) {
 
  const woman = "mujer";
  const unisex = "unisex";
  const man = "hombre";
  const label = "label-";
  
  let genderClass = label+man;

  const nGender = gender.toLowerCase();

  if (nGender === woman) {
    genderClass = label+woman;
  } else if (nGender === unisex) {
    genderClass = label+unisex;
  }

  return (
    <span className={`gender-label ${genderClass}`}>
      {gender}
    </span>
  );

}

export default GenderLabel;