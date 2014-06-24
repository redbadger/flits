package main

import (
  "net/http"
  "io/ioutil"
  "strings"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
  http.ServeFile(w, r, "index.html")
}

// Temporary proxy to the current alpha API once you
// have socket activated fleet to port 4002 on your (Vagrant) CoreOS machine.
// https://github.com/coreos/fleet/blob/master/Documentation/api-v1-alpha.md
func apiHandler(w http.ResponseWriter, r *http.Request) {
  parts := strings.Split(r.URL.Path, "/")
  resource := parts[3]

  resp, fetch_err := http.Get("http://172.17.8.101:4002/v1-alpha/" + resource)
  if fetch_err != nil {}

  body, err := ioutil.ReadAll(resp.Body)

  if err != nil {}
  w.Write(body)
}

func main() {
  fs := http.FileServer(http.Dir("components"))
  http.Handle("/components/", http.StripPrefix("/components/", fs))

  http.HandleFunc("/", indexHandler)
  http.HandleFunc("/fleet/api/", apiHandler)
  http.ListenAndServe(":8080", nil)
}
