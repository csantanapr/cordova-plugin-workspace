Experimental Status

This plugin is for educational purposes only.

Shows how to author a cordova plugin hook

This plugin replaces the build.js and clean.js for cordova ios, if a workspace is present it will
build/clean the workspace instead of the project, sometime useful when having cocoapods in a 
cordova app.

Only tested with cordova-ios@3.9.2

Is not compatible with cordova-ios@4.0.0-dev since the build architecture change

Give it a try

    $ cordova plugin add https://github.com/csantanapr/cordova-plugin-workspace

License: Apache 2.0
