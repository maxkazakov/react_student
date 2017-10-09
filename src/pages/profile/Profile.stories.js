import React from "react"
import { storiesOf } from "@storybook/react"

import { Profile } from "./profile"

storiesOf("Profile", module).add("default", () => (
	<Profile email="test@email.com" firstname="Artem" lastname="Samofalov" />
))
