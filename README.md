flits
=====

Web based control panel for coreos/fleet

Experimental control panel to manage units via fleet on coreos.

You will need to create a file in the root of your project named `settings.gcfg`

```
; flits configuration
[api]
url = http://172.17.8.101:4002/v1-alpha/

[github]
clientId = <<APPLICATION CLIENT ID>>
clientSecret = <<APPLICATION CLIENT SECRET>>
redirectUrl = <<APPLICATION REDIRECT URL>>
scope = user:email
authUrl = https://github.com/login/oauth/authorize/
tokenUrl = https://github.com/login/oauth/access_token/
tokenCache = github_token.json
```

Once you have socket activated your instance of fleet (this example shows it activated on port 4002), you can then point the single page app using the url config option under the api section within the settings file.  The site currently has support for a single access token from github (more features coming on this in regards multiple users and the management of unit file definitions).

You can build the app using `./build`
