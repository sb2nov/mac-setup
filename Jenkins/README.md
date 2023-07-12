Jenkins
=======

Jenkins, an open-source automation server, is a powerful tool for continuous
integration and delivery. While countless resources exist on this topic, we
will explore unique insights and uncover hidden gems to make your installation
journey smooth and hassle-free.

Prerequisites
-------------

To install Jenkins on your machine, ensure that you have the following prerequisites:

* Homebrew installed

* Java Development Kit (JDK) installed

* Administrative access to your machine

Steps to Install Jenkins on Your Machine
----------------------------------------

* Install Jenkins using Homebrew by running the following command:

```shell
brew install jenkins-lts
```

The "lts" flag ensures that the long-term support version of Jenkins is installed.

* If you want to access your Jenkins server from anywhere,

not just your local machine, you need to modify the Jenkins configuration file.

Open the file using the following command:

```shell
sudo vi /usr/local/opt/jenkins-lts/homebrew.mxcl.jenkins-lts.plist
```

* In the file, locate the line:

```shell
<string>--httpListenAddress=127.0.0.1</string>
```

Replace it with:

```shell
<string>--httpListenAddress=0.0.0.0</string>
```

This change allows Jenkins to listen on all available network interfaces.

* Start the Jenkins server using the following command:

```shell
brew services start jenkins-lts
```

Jenkins will now start running as a background service on your machine.

* By default, Jenkins uses port 8080. If you want to change the port, open

the Jenkins configuration file again:

```shell
sudo vi /usr/local/opt/jenkins-lts/homebrew.mxcl.jenkins-lts.plistg
```

Locate the line:

```shell
--httpPort=8080
```

Change `8080` to the desired port number.

* To access Jenkins, open a web browser and enter the following URL:

```plaintext
http://localhost:8080
```

If you changed the port number in the previous step, replace `8080` with the
new port number.

* On the Jenkins setup wizard page, you need to unlock Jenkins. To obtain the

initial admin password, navigate to the following path in your terminal:

```shell
sudo cat /Users/Shared/Jenkins/Home/secrets/initialAdminPassword
```

Copy the password and paste it into the setup wizard.

* Follow the on-screen instructions to complete the installation and set

up your Jenkins instance.

Get ready to unleash the power of Jenkins on your macOS machine
---------------------------------------------------------------
