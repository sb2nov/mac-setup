# Sudo

Macs with TouchID have the option to authenticate for sudo using TouchID instead of the default password authentication.

## Configuration

This can be enabled manually by editing the relevant PAM file:

```sh
sudo vim /etc/pam.d/sudo
```

Add the following to the top of the list

```sh
auth       sufficient     pam_tid.so
```

Then save and exit

```vim
:wq!
```

Or as a one-liner:

```sh
sudo sed -i '' '1a\'$'\n''auth       sufficient     pam_tid.so'$'\n' /etc/pam.d/sudo
```
