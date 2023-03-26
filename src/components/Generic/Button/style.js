import styled from "styled-components";

const colorType = ({ cl }) => {
  switch (cl) {
    case "inherit":
      return {
        background: "inherit",
        border: "1px solid var(--shade-1)",
        color: "var(--shade-1)",
      };
    case "white":
      return {
        background: "var(--shade-1)",
        border: "1px solid #E6E9EC",
        color: "var(--shade-0)",
      };
    case "primery":
      return {
        background: "var(--primery)",
        border: "none",
        color: "var(--shade-1)",
      };
    case "dark":
      return {
        background: "var(--shade-0)",
        border: "none",
        color: "var(--shade-1)",
      };
    default:
      return {
        border: "none",
        background: "var(--primery)",
        color: "var(--shade-1)",
      };
  }
};

export const ButtonContainer = styled.button`
  width: auto;
  padding: ${({pd})=> pd ? `var(${pd})` : "var(--btn-middile)"};
  background-color: inherit;
  cursor: pointer;
  display: flex;  
  border-radius: 3px;
  font-size: var(--size14);
  &:active {
    transform: scale(0.985);
  }
  ${colorType}
`;
