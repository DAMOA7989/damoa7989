# The way of deployment (for me)

I'm using frameworkawareness that is a kind of firebase add-ons for deloyment.

## Enable framework-awareness

```shell
$ firebase --open-sesame frameworkawareness
```

## Deploy Next.js

### Prerequisites

-   Firebase CLI version >= 10.9.1
-   (optional) Billing enabled on your Firebase Project (if you plan to use SSR)

### Initialize Firebase

```shell
$ firebase init hosting
```

### Modify firebase config file

-   firebase.json

```json
{
    "hosting": {
        "source": ".",
        "cleanUrls": true,
        "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
    }
}
```

### Serve locally

```shell
$ firebase serve
```

### Deploy your app to Firebase Hosting

```shell
$ firebase deploy
```

[frameworkawareness github](https://github.com/FirebaseExtended/firebase-framework-tools)

## (After deploy) change the owner.

```shell
$ sudo chown -R [username] .next
```
