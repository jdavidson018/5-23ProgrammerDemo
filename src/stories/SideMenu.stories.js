import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SideMenu from "../components/SideMenu";

storiesOf("Sidebar", module).add("Default", () => <SideMenu />);
