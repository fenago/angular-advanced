* `main.js`

    ```js
    import { value } from "./module1.js";
    import { component1 } from "./component1/component1.js";
    ```

    * `component1\component1.js`

        ```js
        import "./component1.css";
        import * as template from "./component1.html";
        ```

        * `component1\component1.css`

            ```css
            body {
            background-image: url(../assets/128-174.jpg);
            ...;
            }

            @font-face {
            font-family: "Lobster";
            ...
                src:  url("../fonts/Lobster/Lobster-Regular.ttf");
            }
            ```

        * `component1\component1.html`

            ```html
            <img src="../assets/angular_solidBlack.png" alt="Angular Logo">
            ...
            <img src="../assets/robot.png" alt="iRobot">
            ```
