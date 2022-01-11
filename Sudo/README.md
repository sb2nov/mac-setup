# Sudo

Macs with Touch ID have the option to authenticate for sudo using Touch ID instead of the default password authentication.

## Customization

### Manually

This can be enabled manually by editing the relevant PAM file:

```sh
sudo vim /etc/pam.d/sudo
```

Add the following to the top of the list:

```sh
auth       sufficient     pam_tid.so
```

Press esc, then save and exit

```vim
:wq!
```

### One-liner

This can also be done as a one-liner by running:

```sh
sudo sed -i '' '1a\'$'\n''auth       sufficient     pam_tid.so'$'\n' /etc/pam.d/sudo
```
