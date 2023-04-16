## Allure report:

<img width="1394" alt="Screenshot 2023-04-16 at 21 43 08" src="https://user-images.githubusercontent.com/116183278/232340485-21267e19-1ba9-4742-af81-5457a9cd4289.png">

---

## "spec" Reporter:

[emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing /Users/na/Desktop/automation/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk  
[emulator-5554 Android 10 #0-0] Session ID: c35d77d4-4fc0-4b86-bf12-9c9c3e1e56e4  
[emulator-5554 Android 10 #0-0]  
[emulator-5554 Android 10 #0-0] » /tests/specs/app.biometric.login.spec.ts  
[emulator-5554 Android 10 #0-0] WebdriverIO and Appium, when interacting with a biometric button,  
[emulator-5554 Android 10 #0-0]    ✓ should be able to login with a matching touch/faceID/fingerprint   
[emulator-5554 Android 10 #0-0]    ✓ should NOT be able to login with a non matching touch/faceID/fingerprint   
[emulator-5554 Android 10 #0-0]  
[emulator-5554 Android 10 #0-0] 2 passing (8. 6s) 

--

[emulator-5554 Android 10 #0-1] Running: emulator-5554 on Android 10 executing /Users/na/Desktop/automation/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk 
[emulator-5554 Android 10 #0-1] Session ID: 34b0e506-7f3c-41b7-ad2b-acac839ddf17  
[emulator-5554 Android 10 #0-1]  
[emulator-5554 Android 10 #0-1] » /tests/specs/app.deep.link.navigation.spec.ts  
[emulator-5554 Android 10 #0-1] WebdriverIO and Appium, when navigating by deep link  
[emulator-5554 Android 10 #0-1]    ✖ should be able to open the webview  
[emulator-5554 Android 10 #0-1]    ✓ should be able to open the login form screen  
[emulator-5554 Android 10 #0-1]    ✓ should be able to open the forms screen  
[emulator-5554 Android 10 #0-1]    ✓ should be able to open the swipe screen
[emulator-5554 Android 10 #0-1]    ✓ should be able to open the drag and drop screen
[emulator-5554 Android 10 #0-1]    ✓ should be able to open the home screen
[emulator-5554 Android 10 #0-1]
[emulator-5554 Android 10 #0-1] 5 passing (2m 2.9s)
[emulator-5554 Android 10 #0-1] 1 failing
[emulator-5554 Android 10 #0-1]
[emulator-5554 Android 10 #0-1] 1) WebdriverIO and Appium, when navigating by deep link should be able to open the webview
[emulator-5554 Android 10 #0-1] An unknown server-side error occurred while processing the command. Original error: No Chromedriver found that can automate Chrome '74.0.3729'. See https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md for more details
[emulator-5554 Android 10 #0-1] unknown error: An unknown server-side error occurred while processing the command. Original error: No Chromedriver found that can automate Chrome '74.0.3729'. See https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md for more details
[emulator-5554 Android 10 #0-1]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
[emulator-5554 Android 10 #0-1]     at async WebViewScreen.switchToContext (/Users/na/Desktop/automation/appium-boilerplate/tests/helpers/WebView.ts:48:9)
[emulator-5554 Android 10 #0-1]     at async WebViewScreen.waitForWebsiteLoaded (/Users/na/Desktop/automation/appium-boilerplate/tests/helpers/WebView.ts:81:9)
[emulator-5554 Android 10 #0-1]     at async Context.<anonymous> (/Users/na/Desktop/automation/appium-boilerplate/tests/specs/app.deep.link.navigation.spec.ts:17:9)
 
  --
  
[emulator-5554 Android 10 #0-2] Running: emulator-5554 on Android 10 executing /Users/na/Desktop/automation/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 10 #0-2] Session ID: 0772f29a-b265-4cae-92f7-6b6409483b2a
[emulator-5554 Android 10 #0-2]
[emulator-5554 Android 10 #0-2] » /tests/specs/app.drag.and.drop.spec.ts
[emulator-5554 Android 10 #0-2] WebdriverIO and Appium, when using drag and drop
[emulator-5554 Android 10 #0-2]    ✓ should be able to solve the puzzle by dragging the pieces into the puzzle
[emulator-5554 Android 10 #0-2]
[emulator-5554 Android 10 #0-2] 1 passing (19s)
 
 --
  
[emulator-5554 Android 10 #0-3] Running: emulator-5554 on Android 10 executing /Users/na/Desktop/automation/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 10 #0-3] Session ID: 66ffd8a1-812a-4d37-91fc-b3f1f99026f2
[emulator-5554 Android 10 #0-3]
[emulator-5554 Android 10 #0-3] » /tests/specs/app.forms.spec.ts
[emulator-5554 Android 10 #0-3] WebdriverIO and Appium, when interacting with form elements,
[emulator-5554 Android 10 #0-3]    ✓ should be able type in the input and validate the text
[emulator-5554 Android 10 #0-3]    ✓ should be able turn on and off the switch
[emulator-5554 Android 10 #0-3]    ✓ should be able select a value from the select element  
[emulator-5554 Android 10 #0-3]    ✓ should be able to open the alert and close it with all 3 buttons  
[emulator-5554 Android 10 #0-3]    ✓ should be able to determine that the inactive button is inactive  
[emulator-5554 Android 10 #0-3]  
[emulator-5554 Android 10 #0-3] 5 passing (15.9s)  

 --
  
[emulator-5554 Android 10 #0-4] Running: emulator-5554 on Android 10 executing /Users/na/Desktop/automation/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk  
[emulator-5554 Android 10 #0-4] Session ID: 14267833-5cd1-4d91-a002-390f04463167  
[emulator-5554 Android 10 #0-4]  
[emulator-5554 Android 10 #0-4] » /tests/specs/app.login.spec.ts  
[emulator-5554 Android 10 #0-4] WebdriverIO and Appium, when interacting with a login form,  
[emulator-5554 Android 10 #0-4]    ✓ should be able login successfully  
[emulator-5554 Android 10 #0-4]    ✓ should be able sign up successfully  
[emulator-5554 Android 10 #0-4]  
[emulator-5554 Android 10 #0-4] 2 passing (16.6s)  

 -- 
  
[emulator-5554 Android 10 #0-5] Running: emulator-5554 on Android 10 executing /Users/na/Desktop/automation/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk   
[emulator-5554 Android 10 #0-5] Session ID: 1d11d298-736d-4eb5-9ef6-b18b399bb57d  
[emulator-5554 Android 10 #0-5]  
[emulator-5554 Android 10 #0-5] » /tests/specs/app.swipe.spec.ts  
[emulator-5554 Android 10 #0-5] WebdriverIO and Appium, when using swiping  
[emulator-5554 Android 10 #0-5]    ✓ should be able to swipe horizontal by swiping the carousel from left to right  
[emulator-5554 Android 10 #0-5]    ✓ should be able to swipe vertical by finding the surprise  
[emulator-5554 Android 10 #0-5]  
[emulator-5554 Android 10 #0-5] 2 passing (37.2s)  

 --
  
[emulator-5554 Android 10 #0-6] Running: emulator-5554 on Android 10 executing /Users/na/Desktop/automation/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk  
[emulator-5554 Android 10 #0-6] Session ID: 93575c8c-cd4b-4dd6-b00b-1cacbfb7bce2  
[emulator-5554 Android 10 #0-6]  
[emulator-5554 Android 10 #0-6] » /tests/specs/app.tab.bar.navigation.spec.ts  
[emulator-5554 Android 10 #0-6] WebdriverIO and Appium, when using navigation through the tab bar  
[emulator-5554 Android 10 #0-6]    ✖ should be able to open the webview  
[emulator-5554 Android 10 #0-6]    ✓ should be able to open the login form screen  
[emulator-5554 Android 10 #0-6]    ✓ should be able to open the forms screen  
[emulator-5554 Android 10 #0-6]    ✓ should be able to open the swipe screen  
[emulator-5554 Android 10 #0-6]    ✓ should be able to open the drag and drop screen  
[emulator-5554 Android 10 #0-6]    ✓ should be able to open the home screen  
[emulator-5554 Android 10 #0-6]  
[emulator-5554 Android 10 #0-6] 5 passing (1m 29.5s)  
[emulator-5554 Android 10 #0-6] 1 failing  
[emulator-5554 Android 10 #0-6]   
[emulator-5554 Android 10 #0-6] 1) WebdriverIO and Appium, when using navigation through the tab bar should be able to open the webview  
[emulator-5554 Android 10 #0-6] An unknown server-side error occurred while processing the command. Original error: No Chromedriver found that can automate Chrome '74.0.3729'. See https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md for more details  
[emulator-5554 Android 10 #0-6] unknown error: An unknown server-side error occurred while processing the command. Original error: No Chromedriver found that can automate Chrome '74.0.3729'. See https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md for more details  
[emulator-5554 Android 10 #0-6]     at processTicksAndRejections (node:internal/process/task_queues:95:5)  
[emulator-5554 Android 10 #0-6]     at async WebViewScreen.switchToContext (/Users/na/Desktop/automation/appium-boilerplate/tests/helpers/WebView.ts:48:9)  
[emulator-5554 Android 10 #0-6]     at async WebViewScreen.waitForWebsiteLoaded (/Users/na/Desktop/automation/appium-boilerplate/tests/helpers/WebView.ts:81:9)  
[emulator-5554 Android 10 #0-6]     at async Context.<anonymous> (/Users/na/Desktop/automation/appium-boilerplate/tests/specs/app.tab.bar.navigation.spec.ts:16:9)  

 --
  
[emulator-5554 Android 10 #0-7] Running: emulator-5554 on Android 10 executing /Users/na/Desktop/automation/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk. 
[emulator-5554 Android 10 #0-7] Session ID: 74673075-ec70-441f-b760-64ad956538ca  
[emulator-5554 Android 10 #0-7]  
[emulator-5554 Android 10 #0-7] » /tests/specs/app.webview.spec.ts  
[emulator-5554 Android 10 #0-7] WebdriverIO and Appium, when interacting with a WebView,  
[emulator-5554 Android 10 #0-7]    ? should be able to switch between webview, native and webview  
[emulator-5554 Android 10 #0-7]    ✖ "before each" hook for WebdriverIO and Appium, when interacting with a WebView,  
[emulator-5554 Android 10 #0-7]  
[emulator-5554 Android 10 #0-7] 1 failing (1m 38.2s)  
[emulator-5554 Android 10 #0-7]  
[emulator-5554 Android 10 #0-7] 1) WebdriverIO and Appium, when interacting with a WebView, "before each" hook for WebdriverIO and Appium, when interacting with a WebView,  
[emulator-5554 Android 10 #0-7] An unknown server-side error occurred while processing the command. Original error: No Chromedriver found that can automate Chrome '74.0.3729'. See https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md for more details  
[emulator-5554 Android 10 #0-7] unknown error: An unknown server-side error occurred while processing the command. Original error: No Chromedriver found that can automate Chrome '74.0.3729'. See https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md for more details  
[emulator-5554 Android 10 #0-7]     at processTicksAndRejections (node:internal/process/task_queues:95:5)  
[emulator-5554 Android 10 #0-7]     at async WebViewScreen.switchToContext (/Users/na/Desktop/automation/appium-boilerplate/tests/helpers/WebView.ts:48:9)  
[emulator-5554 Android 10 #0-7]     at async WebViewScreen.waitForWebsiteLoaded (/Users/na/Desktop/automation/appium-boilerplate/tests/helpers/WebView.ts:81:9)  
[emulator-5554 Android 10 #0-7]     at async Context.<anonymous> (/Users/na/Desktop/automation/appium-boilerplate/tests/specs/app.webview.spec.ts:18:9)  

 --
  
[emulator-5554 Android 10 #0-8] Running: emulator-5554 on Android 10 executing /Users/na/Desktop/automation/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk  
[emulator-5554 Android 10 #0-8] Session ID: 687fb3ce-9ec2-4142-83f0-f827be5f0f4d  
[emulator-5554 Android 10 #0-8]  
[emulator-5554 Android 10 #0-8] » /tests/specs/app.webview.xpath.spec.ts  
[emulator-5554 Android 10 #0-8] WebdriverIO and Appium, when interacting with a webview through XPATH  
[emulator-5554 Android 10 #0-8]    ✓ should be able to verify that the WebView is shown by xpath  
[emulator-5554 Android 10 #0-8]    ✓ should be able to verify that the WebView is shown by switching to the WebView  
[emulator-5554 Android 10 #0-8]  
[emulator-5554 Android 10 #0-8] 2 passing (6.1s)  


Spec Files:      6 passed, 3 failed, 9 total (100% completed) in 00:08:05   
