import styled from "styled-components";

const Input = styled.input((props) => ({
  backgroundColor: props.theme.colors.neutral200,
  borderRadius: "50px",
  height: "40px",
  border: "1px solid #f1f1f4",
  background: "#f1f2f7",
  padding: "8px 10px",
}));

export { Input };
