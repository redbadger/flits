package settings

import (
  "code.google.com/p/gcfg"
  "github.com/redbadger/flits/utils"
)

var cfg Configuration

type Configuration struct {
  Api struct {
    Url string
  }
  Github struct {
    ClientId string
    ClientSecret string
    RedirectUrl string
    Scope string
    AuthUrl string
    TokenUrl string
    TokenCache string
  }
}

func Load() {
  err := gcfg.ReadFileInto(&cfg, "settings.gcfg")
  utils.Error(err)
}

func Config() Configuration {
  return cfg
}
