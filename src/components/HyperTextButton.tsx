import { useState } from "react";
import styled from "styled-components";

const HoverCss = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 23px;
  padding-right: 23px;
  color: inherit;
  border-radius: 50px;
  gap: 10px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
interface HyperTextButtonProps {
  imgBlack: string;
  imgWhite: string;
  href: string;
  text: string;
}

const HyperTextButton: React.FC<HyperTextButtonProps> = ({
  imgBlack,
  imgWhite,
  href,
  text,
}) => {
  const [image, setImage] = useState(imgBlack);
  return (
    <HoverCss
      href={href}
      target="_blank"
      onMouseOver={() => {
        setImage(imgWhite);
      }}
      onMouseOut={() => {
        setImage(imgBlack);
      }}
    >
      <img src={image} alt="Git" width="30" height="30" />
      {text}
    </HoverCss>
  );
};
export default HyperTextButton;
