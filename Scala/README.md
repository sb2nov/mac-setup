# Scala

Make sure you have Java installed, the instructions are provided [here](/mac-setup/Java/README.html).

```sh
brew update
brew install scala sbt
```

(This step is optional) Update the `/usr/local/etc/sbtopts` by running the command below.

```sh
echo '-J-XX:+CMSClassUnloadingEnabled' >> /usr/local/etc/sbtopts
echo '-J-Xmx2G' >> /usr/local/etc/sbtopts
```

## Scala Plugin for Eclipse

Scala IDE for Eclipse is best installed (and updated) directly from within Eclipse.

This is done by using `Help → Install New Software...`, add the `Add...` button in the dialog.

Choose a name for the update site (`Scala IDE` is a suggestion). Then read the next section to select which version you will install.

### What version to install

The list of URLs of the different update sites are available in the download area. The release ones are in the current section. Scala IDE is linked to specific version of Scala, so you have to decide which one you are going to use:

- Version `2.10`: provides support for projects using Scala 2.10 (any minor version). This is the current version of Scala. Pick this one if you are unsure.

- Version `2.9`: provides support for projects using Scala 2.9 (any minor version).

The version of Scala used inside of Scala IDE cannot be chosen per project. So, if you want to work with a project using different version of Scala (like 2.9.3 and 2.10.1), you need different installation of Scala IDE.

### Finish installation

Copy the URL as location and hit OK to validate.

Select Scala IDE for Eclipse/IntelliJ from the list of available features.

Finish the installation, restart Eclipse and Scala IDE is now installed.
