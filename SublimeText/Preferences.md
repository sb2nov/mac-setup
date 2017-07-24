# Preferences

This is an example of User Settings for a basic development but please feel free to modify or update as per your choice.

Download and install [this font](https://github.com/adobe-fonts/source-code-pro/releases/latest) first.

```
{
    "auto_complete_delay": 5,
    "auto_complete_selector": "source, text",
    "create_window_at_startup": false,
    "folder_exclude_patterns":
    [
        ".svn",
        ".git",
        ".DS_Store",
        "__pycache__",
        "*.pyc",
        "*.pyo",
        "*.exe",
        "*.dll",
        "*.obj",
        "*.o",
        "*.a",
        "*.lib",
        "*.so",
        "*.dylib",
        "*.ncb",
        "*.sdf",
        "*.suo",
        "*.pdb",
        "*.idb",
        "*.psd"
    ],
    "font_face": "Source Code Pro",
    "font_size": 13,
    "ignored_packages":
    [
        "Markdown",
        "Vintage"
    ],
    "open_files_in_new_window": false,
    "rulers":
    [
        80
    ],
    "translate_tabs_to_spaces": true,
    "word_wrap": true
}
```

Add this to Settings &gt; Key Bindings:

```
[
    { "keys": ["super+ctrl+b"], "command": "toggle_side_bar" },
]
```



