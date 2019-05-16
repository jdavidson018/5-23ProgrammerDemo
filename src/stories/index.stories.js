import React from "react";

import { storiesOf } from "@storybook/react";

storiesOf("Button", module)
  .add("Primary", () => <button class="ui primary button">Hello</button>)
  .add("Secondary", () => <button class="ui secondary button">Hello</button>)
  .add("Default", () => <button class="ui button">Hello</button>)
  .add("Animated", () => (
    <div>
      <div class="ui animated button" tabindex="0">
        <div class="visible content">Next</div>
        <div class="hidden content">
          <i class="right arrow icon" />
        </div>
      </div>
      <div class="ui vertical animated button" tabindex="0">
        <div class="hidden content">Shop</div>
        <div class="visible content">
          <i class="shop icon" />
        </div>
      </div>
      <div class="ui animated fade button" tabindex="0">
        <div class="visible content">Hello</div>
        <div class="hidden content">
          <i class="hand peace icon" />
        </div>
      </div>
    </div>
  ))
  .add("Basic Primary", () => (
    <div>
      <button class="ui primary basic button">Primary</button>
      <button class="ui secondary basic button">Secondary</button>
      <button class="ui positive basic button">Positive</button>
      <button class="ui negative basic button">Negative</button>
    </div>
  ));
