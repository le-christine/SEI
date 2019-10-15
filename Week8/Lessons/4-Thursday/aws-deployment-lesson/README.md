| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Deploying an App on AWS | Lab | 3:00 | Prateek Parekh |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Deploying an Application on AWS Lab

## Overview

We'll go through the steps to deploy a simple application on AWS. The focus is not on the app itself but rather on walking you through the different stages of deployment on AWS.

----

## The Deployment Process

### Sign Up for an AWS Account

You should already have created an AWS account; if not, sign up [here](https://aws.amazon.com/account/).

### Create Amazon EC2 Key Pairs   

You'll need these to SSH into your EC2 instance.     

**Secure Shell** (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command line, login, and remote command execution, but any network service can be secured with SSH.    

To create the SSH, follow the instructions [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair).

### Launch an Instance

Step-by-step instructions are provided [here](https://docs.aws.amazon.com/quickstarts/latest/vmlaunch/step-1-launch-instance.html). 

A couple of things to look out for:

- Make sure that "type" is Amazon Linux AMI. 
- The configuration should be marked as "free tier eligible."
- The instance type should be "micro."

### Set Up Java application 

After your instance has started, log in to your instance:

`ssh -i "your-keypair.pem" ec2-user@xx-yy-zz-aa.us-east-2.compute.amazonaws.com`  

In this case, `xx-yy-zz-aa.us-east-2.compute.amazonaws.com` is the public DNS of your instance.

By default, our instance doesn't come with git or JDK. So, we'll go ahead and install them as follows:

#### Git installation on AWS EC2 instance

```sh
#Perform a quick update on your instance:
sudo yum update -y
 
#Install git in your EC2 instance
sudo yum install git -y
 
#Check git version
git version
```

#### JDK 8 installation 

```sh
wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u141-b15/336fa29ff2bb4ef291e347e091f7f4a7/jdk-8u141-linux-x64.rpm

sudo yum install -y jdk-8u141-linux-x64.rpm

# Verify Oracle JDK version
java -version
javac -version

# Installing JRE 1.8
sudo yum install java-1.8.0

# Check if JAVA_HOME env variable is correctly set to /usr/java/jdk1.8.0_141/
echo $JAVA_HOME

# If not, then set JAVA_HOME
export JAVA_HOME=/usr/java/jdk1.8.0_141/

```

#### Clone the sample app

On your instance, clone the sample app
```
git clone https://github.com/prparekh/spring-boot-websocket-chat-demo.git

cd spring-boot-websocket-chat-demo

# package the project with maven
./mvnw package

```

Your target directory should contain the `websocket-demo-0.0.1-SNAPSHOT.jar` file

### Configure Security Groups

1. Open the Amazon EC2 console [here](https://console.aws.amazon.com/ec2/).
2. On the left-hand side, under "Network & Security," click "Security Groups."
3. Select the instance that you had created for deploying the app.
4. At the bottom, click "Inbound." This is for incoming traffic for your instance.
5. You'll notice that port 8081 is not listed. Click "Edit" to change inbound rules.
6. Click "Add Rule." Change type to "Custom TCP Rule," port to 8081, and source to "Anywhere." Save.

### Launch the App

`java -jar target/websocket-demo-0.0.1-SNAPSHOT.jar`

Open up your browser and access your application as `http://your-instance-public-ip:8080/`.

To shut down the app, on your instance terminal press `CTRL+C`.

**Note**: Don't forget to terminate your instance after use. The instructions for clean up are provided [here](https://docs.aws.amazon.com/quickstarts/latest/vmlaunch/step-3-clean-up-instance.html)

### Success!

You have successfully deployed a basic application on AWS! 

### Deploying an Application With a Database

If you have extra time, follow the steps [here](https://aws.amazon.com/blogs/devops/deploying-a-spring-boot-application-on-aws-using-aws-elastic-beanstalk/) to launch a slightly more complicated application. 

------

## Recap

To review, we first signed up for an AWS account. After that, we created EC2 key pairs that will allow us to SSH into any EC2 instance. Next, we launched an EC2 instance based on a Linux image and set up and launched a sample application on this instance. Finally, we configured security groups to secure our instance by adding custom rules.   
    
