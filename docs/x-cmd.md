---
title: x-cmd
---

[x-cmd](https://www.x-cmd.com) is a lightweight toolkit built on Shell and Awk, designed to maximize terminal productivity.

In the AI era, if the LLM serves as the **Brain** of an AI Agent (handling reasoning and decision-making), x-cmd acts as the **Cerebellum**—providing a versatile set of action interfaces and tools to execute terminal tasks with speed and precision.

## Installation

x-cmd offers a highly compatible installation script that supports various shells, including bash, zsh, dash, and ash.

```sh
eval "$(curl https://get.x-cmd.com)"
```

To verify the installation, run:

```sh
x
```

> [Official Installation Documentation](https://www.x-cmd.com/start/)

## Usage

x-cmd creates a comprehensive terminal ecosystem. Below are its core use cases:

### 1. Package & Environment Management

Manage your development environment through a unified interface. Say goodbye to complex variable configurations and enjoy an out-of-the-box experience.

```sh
# Install Homebrew
x install brew

# Setup AI Agent tools (e.g., Claude Code)
x env use claude-code

# Quickly switch/use a specific Python version
x env use python=v3.13.0+25.07.0-2
```

### 2. System Optimization & Customization

Simplify tedious system configurations and tailor the terminal to your workflow.

```sh
# Mirror Acceleration: Automatically optimize Homebrew sources
x brew mirror

# Theme Management: Switch terminal themes (e.g., Dracula) with one click
x theme use dracula

# macOS Enhancement: Enable TouchID for sudo (Equivalent to: x mac tidsudo enable)
m tidsudo enable
```

### 3. Essential Utilities

x-cmd includes a suite of enhanced commands featuring visualized outputs and simplified arguments.

| Command | Description |
| :--- | :--- |
| `x ip` | Display private/public IP addresses and detailed geolocation info. |
| `x ping` | Enhanced ping with visual charts for latency and packet loss. |
| `x sb` | Sandbox execution: Run commands securely in a restricted environment (similar to Deno/Docker permissions). |
| `x font` | Quickly search, download, and install terminal fonts. |
| `x tldr` | Command cheatsheets (conciser and more practical than man pages). |
