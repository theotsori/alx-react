import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

global.alert = jest.fn();

describe("App tests", () => {
  let component;

  beforeEach(() => {
    const logOutSpy = jest.fn();
    component = shallow(<App logOut={logOutSpy} />);
  });

  afterEach(() => {
    global.alert.mockClear();
  });

  it("renders without crashing", () => {
    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    expect(component.contains(<Notifications />)).toBe(true);
  });

  it("should render Header component", () => {
    expect(component.contains(<Header />)).toBe(true);
  });

  it("should render Login Component", () => {
    expect(component.contains(<Login />)).toBe(true);
  });

  it("should render Footer component", () => {
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render courselist if logged out", () => {
    component.setProps({ isLoggedIn: false });
    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("renders courselist if logged in", () => {
    expect(component.contains(<CourseList />)).toBe(true);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("calls logOut function and displays alert when pressing Ctrl + h", () => {
    const ctrlHEvent = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(ctrlHEvent);
    expect(component.instance().props.logOut).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith("Logging you out");
  });
});
