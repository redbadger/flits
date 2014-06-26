package api

import (
  "net/http"
  "net/url"
  "io/ioutil"
  "github.com/redbadger/flits/settings"
  "github.com/redbadger/flits/utils"
)

func GetMachines() string {
  return Get("/machines")
}

func GetUnits() string {
  return Get("/units")
}

func Get(resource string) string {
  endpoint, err := url.Parse(settings.Config().Api.Url + resource)
  utils.Error(err)

  resp, err := http.Get(endpoint.String())
  utils.Error(err)

  body, err := ioutil.ReadAll(resp.Body)
  utils.Error(err)

  return string(body[:])
}
