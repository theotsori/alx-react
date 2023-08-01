import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications tests", () => {
  it("renders Notifications component without crashing", () => {
    const component = shallow(<Notifications displayDrawer={false} listNotifications={[]} />);
    expect(component.exists()).toBe(true);
  });

  it("renders the correct number of NotificationItem components", () => {
    const listNotifications = [
      { id: 1, html: { __html: "Notification 1" }, type: "default", value: "Notification 1" },
      { id: 2, html: { __html: "Notification 2" }, type: "urgent", value: "Notification 2" },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
  });

  it("displays correct message when listNotifications is empty", () => {
    const wrapperEmpty = shallow(<Notifications displayDrawer={false} listNotifications={[]} />);
    expect(wrapperEmpty.find("p").text()).toBe("No new notification for now");

    const wrapperNotEmpty = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapperNotEmpty.find("p").text()).toBe("No new notification for now");
  });

  it("does not display the message 'Here is the list of notifications' when listNotifications is empty", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={[]} />);
    expect(wrapper.find("p").exists()).toBe(false);
  });

  it("displays the menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
    expect(wrapper.find(".Notifications")).toHaveLength(0);
  });

  it("does not display the div.Notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".Notifications")).toHaveLength(0);
  });

  it("displays the menu item when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
    expect(wrapper.find(".Notifications")).toHaveLength(1);
  });

  it("displays the div.Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".Notifications")).toHaveLength(1);
  });
});
