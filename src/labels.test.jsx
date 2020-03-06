import React from "react";
import { render } from "@testing-library/react";

export const labelText = "My Input";

it("finds an input via label text", () => {
  const { getByLabelText } = render(
    <label>
      {labelText}
      <input />
    </label>
  );
  const inputEl = getByLabelText(labelText);
  expect(inputEl).toBeInTheDocument();
});

it("finds an input via label text when SVG title tag is a descendant", () => {
  const { getByLabelText } = render(
    <label>
      <svg>
        <title>My SVG</title>
      </svg>
      {labelText}
      <input />
    </label>
  );
  const inputEl = getByLabelText(labelText); // fails to find input element
  expect(inputEl).toBeInTheDocument();
});
