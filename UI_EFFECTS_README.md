# KINESIS UI effects update

This update changes only visual interaction behavior. Existing page text, product data, image paths, videos, Firebase code, navigation, and the 360-degree product viewer were preserved.

| Area | Implementation |
|---|---|
| Shared styling | Added the interaction layer at the end of `css/styles.css`. |
| Shared JavaScript | Added `js/ui-effects.js` and loaded it from every HTML page. |
| Product cards | All product showcase cards and product-purpose cards gain a pop-out focus state. Other focus targets blur and dim while the active item remains sharp. |
| Team | Leadership entries and individual department-member entries use the same focus state. The active team photo receives a cyan-to-magenta highlighted frame. |
| Home hero | Replaced the former rotating ring behavior with a logo-colored gradient ring, local logo treatment, and a slow `logoPulse` breathing animation. |
| Buttons | `.btn`, navigation CTAs, product picker controls, viewer controls, and chat controls receive a reusable animated light sweep on hover/focus. |
| Mobile | Touch devices use tap-to-toggle behavior. A second tap on the active target, tapping elsewhere, or pressing Escape clears the focus state. |

The logo palette used for the gradient is electric cyan/blue through violet and magenta, matching the supplied KINESIS logo. The original `assets/logo.png` file was not replaced.

## Main edit points

The reusable behavior can be adjusted in `js/ui-effects.js`. The visual values—including blur amount, scale, glow, gradient colors, pulse speed, and button sweep timing—are in the `KINESIS INTERACTION EFFECTS` section at the end of `css/styles.css`.
