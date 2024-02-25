# Tmux

Tmux, short for `T`erminal `MU`ltiple`X`er, is a powerful tool that allows users
to manage multiple terminal sessions within a single window.
With Tmux, you can switch between different sessions and run multiple terminal
programs simultaneously, enhancing your productivity and workflow.

&nbsp;

## Prerequisite

Before installing Tmux, ensure that you have Homebrew installed on your system.
If you don't have Homebrew, you can refer to the
[Homebrew installation guide](../Homebrew/README.md)
for instructions.

&nbsp;

## Installation

```sh
brew install tmux
```

Once the installation is complete, you can verify if Tmux is properly installed
by typing the following command in your terminal:

```sh
tmux
```

Above command will create a session in current window.

&nbsp;

## Usage

### Starting Multiple Sessions with Tmux

To start a new Tmux session with a specific session name, use the following command:

```sh
tmux new-session -s SESSION_NAME
```

Replace `SESSION_NAME` with the desired name for your session. This command will
create a new Tmux session with the given name.

&nbsp;

### The Prefix Key

Once you've started a Tmux session, any keys entered are forwarded to the program
running in the active pane of the current window. To control Tmux, a special
prefix key is used, which is typically `Ctrl + B` by default.

### Create new window in current session

To create a new terminal window within the current Tmux session, press the
following keys in the current window:

> `Ctrl + B`, then release the keys and press `C`

The prefix key sequence `Ctrl + B` tells Tmux to wait for another key press.
After releasing the prefix key, pressing `C` will create a new window in the
current session.

&nbsp;

### Switching Between Windows Within a Tmux Session

If you've created multiple windows in the current Tmux session, you can switch
between them by using the following command:

> `Ctrl + B`, then release the keys and press the corresponding window number.

For example, to switch to the first window in the current session, press
`Ctrl + B`, release the keys, and then press `1`. Please note that window numbers
start from `0`.

&nbsp;

### Scrolling window in tmux

In Tmux, scrolling within a window allows you to access previously executed
commands and view the output that extends beyond the visible portion of the terminal.

To scroll within the current window in Tmux, use the following command:
> `Ctrl + B` then release the keys and press `[`

This key sequence instructs Tmux to enter scroll mode.Once in scroll mode, you
can use the arrow keys or the Page Up and Page Down keys to navigate through the
terminal's scrollback buffer and view the previous commands and output.

To exit scroll mode and return to normal mode, press the `q` key.

&nbsp;

### Exiting From Current Tmux Session

To exit from a Tmux session, simply type `exit` within the session window, and
you will be automatically disconnected from the session.

&nbsp;

By utilizing Tmux's features, you can effectively manage and organize multiple
terminal sessions, improving your command-line experience and overall efficiency.
