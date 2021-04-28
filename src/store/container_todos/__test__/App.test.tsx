import { shallow } from "enzyme";
import React from "react";
import { toJson } from "enzyme-to-json";
import { render, screen } from '@testing-library/react';
import Header from "../../../components/Header/Header";

it('renders learn react link', () => {
  // render(<Header />);
  // const linkElement = screen.getByText(/Project ToDo/i);
  // expect(linkElement).toMatchSnapshot();
  const wrapper = shallow(<Header />);
  expect(toJson(wrapper)).toMatchSnapshot();
});