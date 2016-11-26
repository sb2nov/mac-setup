# Go (golang programming language)

## Install [Golang](https://golang.org/) with Homebrew:

    $ brew update
    $ brew install golang

When installed, try to run `go version` to see the installed version of Go. 

## Setup the workspace:
### Add Environment variables:

Go has a different approach of managing code, you'll need to create a single Workspace for all your Go projects. For more information consult : [How to write Go Code](https://golang.org/doc/code.html#Workspaces)

First, you'll need to tell Go the location of your workspace.

We'll add some environment variables into shell config. One of does files located at your home directory `bash_profile`, `bashrc` or `.zshrc` (for Oh My Zsh Army)

    $ vi .bashrc

Then add those lines to export the required variables
```
# This is actually your .bashrc file

export GOPATH=$HOME/go-workspace # don't forget to change your path correctly!
export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$GOPATH/bin
export PATH=$PATH:$GOROOT/bin
```

### Create your workspace:
 Create the workspace directories tree:
 
    $ mkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin

```
$GOPATH/src : Where your Go projects / programs are located
$GOPATH/pkg : contains every package objects
$GOPATH/bin : The compiled binaries home
```

### Hello world time!
 Create a file in your `$GOPATH/src`, in my case `hello.go`
 Hello world program :
 ```
package main
import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}
 ```
 
 Run your first Go program by executing:
 
    $ go run hello.go
    
 You'll see a sweet hello, world stdout
 
 If you wish to compile it and move it to `$GOPATH/bin`, then run:
 
     $ go install hello.go

Since we have `$GOPATH/bin` added to our `$PATH`, you can run your program from placement :

    $ hello
Prints : hello, world

## Some References and utilities:
#### Import a Go package:
You can create Go package, as well importing shared ones. To do so you'll need to use `go get` command

    $ go get -u github.com/gorilla/mux
The command above should import `github.com/gorilla/mux` Go package into this directory `$GOPATH/src/github.com/gorilla/mux`

You can then use this package in your Go programs by importing it. Example:
```
package main

import (
    "net/http"
    "log"
    "github.com/gorilla/mux" #Imported Go Package
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


#### Format your Go code
 Go has a tool that automatically formats Go source code.
    
    $ gofmt -w yourcode.go
OR

    $ go fmt path/to/your/package

#### Godoc : The documentation tool
Using the `godoc` command, you can generate a program documentation.

    $ godoc fmt                # documentation for package fmt
    $ godoc fmt Printf         # documentation for fmt.Printf
    $ godoc -src fmt           # fmt package interface in Go source form

You need to respect some spec in order to document using `godoc`. You can read more about : [godoc Documenting Go code](https://blog.golang.org/godoc-documenting-go-code)

#### Discovering more the language:
The following interactive tutorial will let you discover Golang world : [A tour of Go](https://tour.golang.org/)