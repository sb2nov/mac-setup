# Java

Check if Java is already installed

    $ java -version

If you see an output like below then Java is already installed on your machine so skip the next step.

    java version "1.8.0_45"
    Java(TM) SE Runtime Environment (build 1.8.0_45-b14)
    Java HotSpot(TM) 64-Bit Server VM (build 25.45-b02, mixed mode)

If you don't see the output like above then you need to install Java on your system. Please download the OS X version from the [Oracle website](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

Check if Java is correctly installed by running the `java -version` command again.

Add `JAVA_HOME` to your environment variables by adding the line below to your `env.sh`.

    export JAVA_HOME="`/usr/libexec/java_home -v 1.8`"

You should have JAVA working now. You can use [Eclipse](https://www.eclipse.org/downloads/) or [IntelliJ](https://www.jetbrains.com/idea/download/) as your Java IDE.
