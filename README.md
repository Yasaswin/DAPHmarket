# daph-mobile

A react-native app that powers the Kiri Awswanu application

# Tech References
[REALM REACT NATIVE SDK](https://www.mongodb.com/docs/realm/sdk/react-native/)

[AXIOS](https://axios-http.com/docs/intro)

# Usage

1. Install `nvm`, `node`, `npm` 
2. Use node version `16.14.2`
3. Clone the repo
4. Run the app

# Development 

## Setup

1. Install nvm
2. Use nvm to install current node version (16.14.2)
3. Clone the repo
4. Install dependencies
   ```
     npm install 
   ```
5. Run the app
   
    For Android
    ```
        npm run android
    ```
   
   For iOS   

    ```
        npm run ios
    ```
   
## Git Conventions

1. Commit message


    ui-screen add/update/fix
    functionality add/update/fix

2. Branches


    feature-add/update/fix- (for every branch must be raised a PR before merging into develop)
    develop - all checks successful PRs can be merged to develop branch 
    master - after testing latest develop branch, it can be merged to master

## Release

### Generating an upload key

You can generate a private signing key using keytool.

#### Windows
On Windows keytool must be run from `C:\Program Files\Java\jdkx.x.x_x\bin`, as administrator.

    keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

This command prompts you for passwords for the keystore and key and for the Distinguished Name fields for your key. It then generates the keystore as a file called my-upload-key.keystore.

The keystore contains a single key, valid for 10000 days. The alias is a name that you will use later when signing your app, so remember to take note of the alias.

#### macOS

On macOS, if you're not sure where your JDK bin folder is, then perform the following command to find it:

    /usr/libexec/java_home

It will output the directory of the JDK, which will look something like this:
    
    /Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home

Navigate to that directory by using the command cd /your/jdk/path and use the keytool command with sudo permission as shown below.
    
    sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

### Setting up Gradle variables

1. Place the `daph_mobile-upload-key.keystore` file under the `android/app` directory in your project folder.
2. Edit the file `android/gradle.properties`, and add the following (replace ***** with the correct keystore password, alias and key password),

   APP_UPLOAD_STORE_FILE=daph_mobile-upload-key.keystore
   APP_UPLOAD_KEY_ALIAS=daph-mobile-key-alias
   APP_UPLOAD_STORE_PASSWORD=*****
   APP_UPLOAD_KEY_PASSWORD=*****

### Generating the release AAB

    cd android
    ./gradlew bundleRelease

### Testing the release build of the app

Before uploading the release build to the Play Store, make sure you test it thoroughly. First uninstall any previous version of the app you already have installed. Install it on the device using the following command in the project root:

    npx react-native run-android --variant=release


