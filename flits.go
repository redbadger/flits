package main

import (
  "net/http"
  "fmt"
  "github.com/redbadger/flits/api"
  "github.com/redbadger/flits/settings"
  "github.com/redbadger/flits/auth"
)

func SetContentType(w http.ResponseWriter, contentType string) {
  w.Header().Set("Content-Type", contentType)
}

func auth(handler http.HandlerFunc) http.HandlerFunc {
  return func(w http.ResponseWriter, r *http.Request) {
    if (github.Token() == nil) {
      authUrl := github.AuthenticationUrl()
      http.Redirect(w, r, authUrl, 301)
    } else {
      handler(w, r)
    }
  }
}

func githubHandler(w http.ResponseWriter, r *http.Request) {
  github.Authorize(r.URL.Query()["code"][0])
  http.Redirect(w, r, "/", 301)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
  SetContentType(w, "text/html")
  http.ServeFile(w, r, "index.html")
}

func machinesHandler(w http.ResponseWriter, r *http.Request) {
  SetContentType(w, "application/json")
  fmt.Fprint(w, api.GetMachines())
}

func unitsHandler(w http.ResponseWriter, r *http.Request) {
  SetContentType(w, "application/json")
  fmt.Fprint(w, api.GetUnits())
}

func main() {
  settings.Load()

  fs := http.FileServer(http.Dir("components"))
  http.Handle("/components/", http.StripPrefix("/components/", fs))

  http.HandleFunc("/", auth(indexHandler))
  http.HandleFunc("/auth/github/callback/", githubHandler)
  http.HandleFunc("/api/machines/", auth(machinesHandler))
  http.HandleFunc("/api/units/", auth(unitsHandler))
  http.ListenAndServe(":8080", nil)
}
