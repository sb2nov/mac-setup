# Go

[Go](https://golang.org) is an open source programming language that makes it easy to build simple, reliable, and efficient software.

## Installation

You can follow the [official instructions on how to install Go](https://golang.org/doc/install), or you can use Homebrew instead:

```sh
brew install go
```

When installed, run `go version` to see the installed version of Go.

```sh
$ go version
go version go1.11.4 darwin/amd64
```

## Setup your workspace

### The GOPATH and PATH environment variables

The `GOPATH` environment variable specifies the location of your workspace. It defaults to a directory named `go` inside your home directory (`$HOME/go`).

If you really want to change your GOPATH to something else add GOPATH to your shell/bash/zsh initialization file `.bash_profile`, `.bashrc` or `.zshrc`.

```sh
export GOPATH=/something-else
```

Add `GOPATH/bin` directory to your `PATH` environment variable so you can run Go programs anywhere.

```sh
export PATH=$PATH:$(go env GOPATH)/bin
```

Make sure to re-source `source .bash_profile` your current session or simply open new tab within iTerm.

## Write your first program

Create a file in your workspace `$GOPATH/src/hello/main.go` and add some code, for example:

```go
package main

func main() {
    println("Hello World!")
}
```

Run the program by running:

```console
$ go run hello.go
Hello World!
```

If you wish to compile it and move it to `$GOPATH/bin`, then run:

```sh
go install .
```

Since you have `$GOPATH/bin` added to your `$PATH`, you can run your program from anywhere:

```console
$ hello
Hello World!
```

## Import a Go package

Besides creating your own packages you can import and use other packages in your Go code. To do so you'll use the `go get` command:

```sh
go get -u github.com/gorilla/mux
```

The command above will import the package `mux` into this directory `$GOPATH/src/github.com/gorilla/mux`.

You can then use this package in your Go programs like this:

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

> **Note**: that the command is different from formatting a single file

### Generate documentation

With the `godoc` command you can generate documentation from your code and read documentation from other packages.

```sh
godoc fmt                # documentation for package fmt
godoc fmt Printf         # documentation for fmt.Printf
godoc -src fmt           # fmt package interface in Go source form
godoc -all -http :1234   # documentation for all packages on your machine served through http http://localhost:1234
```

You need to respect some spec in order to document using `godoc`. More information in the [Godoc documentation](https://blog.golang.org/godoc-documenting-go-code).

### Learn more

The [interactive tutorial](https://tour.golang.org/) will let you learn more about Go. You can also install it locally by `go get golang.org/x/tour` and running it anywhere by `tour` (given that you added `GOPATH/bin` to your `PATH`).
