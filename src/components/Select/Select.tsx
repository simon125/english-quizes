import { FC } from "react";
import { Tag } from "../Tag/Tag";
import styled from "@emotion/styled";

const StyledDetails = styled("details")`
  height: fit-content;
  min-height: 60px;
`;

const StyledSummary = styled("summary")`
  position: relative;
  height: fit-content;
  min-height: 60px;

  &&::after {
    position: absolute;
    right: 7px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const StyledTagsContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  width: 95%;
`;

export interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  values: Option[];
  onChange: (newOptions: Option[]) => void;
}

export const Select: FC<SelectProps> = ({ options, values, onChange }) => {
  return (
    <StyledDetails role="list">
      <StyledSummary aria-haspopup="listbox">
        <StyledTagsContainer>
          {values.map(({ label, value }) => (
            <Tag
              onClick={() => {
                const newValues = values.filter(
                  (valueToCheck) => valueToCheck.value !== value
                );
                onChange(newValues);
              }}
              key={label}
            >
              {label}
            </Tag>
          ))}
        </StyledTagsContainer>
      </StyledSummary>
      <ul role="listbox">
        {options.map((option) => (
          <li key={option.value}>
            <label key={option.value}>
              <input
                onChange={({ target }) => {
                  const newValues = target.checked
                    ? [...values, option]
                    : values.filter(
                        (valueToCheck) => valueToCheck.value !== option.value
                      );

                  onChange(newValues);
                }}
                type="checkbox"
                checked={!!values.find(({ value }) => option.value === value)}
              />
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </StyledDetails>
  );
};
