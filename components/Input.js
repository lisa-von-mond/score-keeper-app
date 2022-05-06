import styled from "styled-components";

export default function Input({
  labelText,
  placeholder,
  name,
  value,
  onChange,
  required,
}) {
  return (
    <>
      <InputLabel htmlFor={name}>{labelText}</InputLabel>
      <InputStyled
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}

const InputStyled = styled.input`
  border: 2px solid #4c4a8f;
  font-size: 1.5rem;
  padding: 1rem;
  width: 100%;
  margin: 1rem 0;
  display: block;
  border-radius: 500px;
`;

const InputLabel = styled.label`
  font-size: 2rem;
`;
