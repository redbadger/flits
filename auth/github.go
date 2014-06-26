package github

import (
  "code.google.com/p/goauth2/oauth"
  "github.com/redbadger/flits/utils"
  "github.com/redbadger/flits/settings"
)

func Token() *oauth.Token {
  token, err := OAuthConfig().TokenCache.Token()
  if (err != nil) {
    return nil
  }
  return token
}

func OAuthConfig() *oauth.Config {
  var cfg = settings.Config()
  config := &oauth.Config{
    ClientId:     cfg.Github.ClientId,
    ClientSecret: cfg.Github.ClientSecret,
    RedirectURL:  cfg.Github.RedirectUrl,
    Scope:        cfg.Github.Scope,
    AuthURL:      cfg.Github.AuthUrl,
    TokenURL:     cfg.Github.TokenUrl,
    TokenCache:   oauth.CacheFile(cfg.Github.TokenCache),
  }
  return config
}


func AuthenticationUrl() string {
  return OAuthConfig().AuthCodeURL("")
}

func Authorize(code string) string {
  transport := &oauth.Transport { Config: OAuthConfig() }
  token, err := transport.Exchange(code)
  utils.Error(err)
  return token.AccessToken
}
