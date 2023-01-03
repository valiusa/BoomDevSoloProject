import * as React from "react";

export default function Logo({ type = "default" }) {
    const defaultLogoUrl = "../images/logo.svg";
    const mutedLogoUrl = "../images/logo-muted.svg";

    if (type === "default") {
        return React.createElement("img", { src: defaultLogoUrl }, null);
    }

    return React.createElement("img", { src: mutedLogoUrl }, null);
}
