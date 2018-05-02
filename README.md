![burger](https://github.com/bashleigh/areyouinfordinner-app/blob/master/PixelArt.png?raw=true)

Are you in for dinner app
===

An app for my family to use to track who and who isn't in for dinner using simple questions in push notifications. To prove to my Mother that I really DID say I was going to be in for dinner.

## Install

_links to apple and android apps_

### Development 

Areyouinfordinner uses expo as most react-native packages from .55 do. To start run `yarn start` which starts the expo server. From there you have options: 

```bash
 › Press a to open Android device or emulator, or i to open iOS emulator.
 › Press s to send the app URL to your phone number or email address
 › Press q to display QR code.
 › Press r to restart packager, or R to restart packager and clear cache.
 › Press d to toggle development mode. (current mode: development)
```

You will also be presented with a QR code to scan with an expo app on the same network.

Alternatively you can run `yarn ios` to start an iphone emulator or `yarn android` to start an android emulator. 

> Make sure that when running in development mode that the areyouinfordinner API is running on port 3000.
