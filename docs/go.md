---
title: Go
---


[Go](https://go.dev) is an open source programming language that makes it easy to build simple, reliable, and efficient software.

## Installation

You can follow the [official instructions on how to install Go](https://go.dev/doc/install), or you can use Homebrew instead:

```sh
brew install go
```

When installed, run `go version` to see the installed version of Go.

Add `GOPATH/bin` directory to your `PATH` environment variable so you can run Go programs anywhere. Add this to your `~/.zshrc` (or `~/.bash_profile`):

```sh
export PATH=$PATH:$(go env GOPATH)/bin
```

## Write your first program

Modern Go uses **modules** for dependency management. Create a new project:

```sh
mkdir hello && cd hello
go mod init hello
```

Create a file `main.go`:

```go
package main

func main() {
    println("Hello World!")
}
```

Run the program by running:

```console
$ go run .
Hello World!
```

## Import a Go package

With Go modules, you simply import packages in your code and run `go mod tidy` to download them:

```go
package main

import (
    "github.com/gorilla/mux" // Your imported package
    "net/http"
)

func yourHandler(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("Gorilla!\n"))
}

func main() {
    r := mux.NewRouter()
    // Routes consist of a path and a handler function.
    r.HandleFunc("/", yourHandler)

    // Bind to a port and pass our router in
    panic(http.ListenAndServe(":8000", r))
}
```

Then run:

```sh
go mod tidy
```

This will automatically download and add the dependency to your `go.mod` file.

## Tooling and learning

### Format your code

Go has a built-in tool that automatically formats Go source code.

To format a single file run:

```sh
gofmt -w yourcode.go
```

You can also format an entire package:

```sh
go fmt path/to/your/package
```

### Learn more

The [interactive tutorial](https://go.dev/tour/) will let you learn more about Go.
