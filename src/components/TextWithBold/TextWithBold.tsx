import { FC } from "react";

interface TextWithBoldProps {
  text: string;
}

export const TextWithBold: FC<TextWithBoldProps> = (props) => {
  const { text } = props;

  const parseText = () => {
    const parts = text.split("*");
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <b key={index}>{part}</b>;
      }
      return part;
    });
  };

  return <p>{parseText()}</p>;
};
