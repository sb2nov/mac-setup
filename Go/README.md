# Go

[Go](https://github.com/golang/go) (also known as Golang) is an open source programming language maintained by Google.

## Installation

    $ brew install golang

When installed, try to run `go version` to see the installed version of Go.

## Setup your workspace

### Add environment variables

Go has a unique approach of managing code where you have a single workspace for all your Go projects. For more information see the [documentation](https://golang.org/doc/code.html#Workspaces).

First, you'll need to tell Go the location of your workspace. We'll do this by adding some environment variables in your shell config file (usually `.bash_profile`, `.bashrc` or `.zshrc`).

```sh
export GOPATH=$HOME/go
export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$GOPATH/bin
export PATH=$PATH:$GOROOT/bin
```

Once you save and close that file, make sure you run `source <filename>` to restart your bash session so that you have those changes. For example:

```sh
source ~/.bash_profile
```

### Create your workspace

Create the workspace directories tree:

    $ mkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin

`$GOPATH/src` This is where your Go projects are located
`$GOPATH/pkg` A folder that contains every package objects
`$GOPATH/bin` The compiled binaries home

## Write your first program

Create a file in your `$GOPATH/src`, for example `hello.go`, and input the following code

```go
package main
import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}
```

Run the program by running:

    $ go run hello.go

If you wish to compile it and move it to `$GOPATH/bin`, then run:

    $ go install hello.go

Since we have `$GOPATH/bin` added to our `$PATH`, you can run your program from anywhere:

    $ hello

## Import a Go package

Besides creating your own packages you can import and use other packages in your Go code. To do so you'll use the `go get` command:

    $ go get -u github.com/gorilla/mux

The command above will import the package `mux` into this directory `$GOPATH/src/github.com/gorilla/mux`.

You can then use this package in your Go programs like this:
```go
package main

import (
    "net/http"
    "log"
    "github.com/gorilla/mux" // Your imported package
)

func YourHandler(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("Gorilla!\n"))
}

func main() {
    r := mux.NewRouter()
    // Routes consist of a path and a handler function.
    r.HandleFunc("/", YourHandler)

    // Bind to a port and pass our router in
    log.Fatal(http.ListenAndServe(":8000", r))
}
```

## Format your code

Go has a built-in tool that automatically formats Go source code.

To format a single file run:

    $ gofmt -w yourcode.go

You can also format an entire package (**Note that the command is different from formatting a single file**):

    $ go fmt path/to/your/package

## Generate documentation

With the `godoc` command you can generate documentation from your code and read documentation from other packages.

    $ godoc fmt                # documentation for package fmt
    $ godoc fmt Printf         # documentation for fmt.Printf
    $ godoc -src fmt           # fmt package interface in Go source form

You need to respect some spec in order to document using `godoc`. More information in the [Godoc documentation](https://blog.golang.org/godoc-documenting-go-code).

## Learn more

This [interactive tutorial](https://tour.golang.org/) will let you learn more about Go.
