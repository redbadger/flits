package utils

import (
  "log"
)

func Error(err error) {
  if (err != nil) {
    log.Fatal(err)
  }
}
