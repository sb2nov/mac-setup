# Java

Check if Java is already installed

    $ java -version

If you see an output like below then Java is already installed on your machine so skip the next step.

    java version "1.7.0_55"
    Java(TM) SE Runtime Environment (build 1.7.0_55-b13)
    Java HotSpot(TM) 64-Bit Server VM (build 24.55-b03, mixed mode)

If you don't see the output like above then you need to install Java on your system. Please download the OS X version from the [Oracle website](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html).

Check if Java is correctly installed by running the `java -version` command again.

Add `JAVA_HOME` to your environment variables by adding the line below to your `env.sh`.

    export JAVA_HOME="`/usr/libexec/java_home -v 1.7`"

You should have JAVA working now. If you use [Eclipse](https://www.eclipse.org/downloads/) as your Java IDE it'll prompt you to install Java 6, go ahead and click Ok.
