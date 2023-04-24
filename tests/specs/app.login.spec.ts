import TabBar from "../screenobjects/components/TabBar";
import LoginScreen from "../screenobjects/LoginScreen";
import NativeAlert from "../screenobjects/components/NativeAlert";

describe("WebdriverIO and Appium, when interacting with a login form,", () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it("should be able login successfully", async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({
            username: "test@webdriver.io",
            password: "Test1234!",
        });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual(
            "Success\nYou are logged in!"
        );

        // Close the alert
        await NativeAlert.topOnButtonWithText("OK");
        await NativeAlert.waitForIsShown(false);
    });

    it("should not be able login with a wrong passwords", async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({
            username: "test@webdriver.io",
            password: "4321",
        });
        // Wait for the alert and validate it
        await NativeAlert.waitForThePasswordAlert();
        await expect(await NativeAlert.alertPasswordText()).toEqual(
            "Please enter at least 8 characters"
        );
    });

    it("should be able sign up successfully", async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
        await LoginScreen.submitSignUpForm({
            username: "test@webdriver.io",
            password: "Test1234!",
        });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual(
            "Signed Up!\nYou successfully signed up!"
        );

        // Close the alert
        await NativeAlert.topOnButtonWithText("OK");
        await NativeAlert.waitForIsShown(false);
    });

    it("should not be able sign up with wrong repeat password", async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
        await LoginScreen.wrongSubmitSignUpForm({
            username: "test",
            password: "Test1234!",
            wrongPassword: "1234",
        });
        // Wait for the alert and validate it
        await NativeAlert.waitForTheAlertRepeatPassword();
        await expect(await NativeAlert.alertRepeatPassword()).toEqual(
            "Please enter the same password"
        );
    });
});
