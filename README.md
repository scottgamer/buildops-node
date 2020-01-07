# BuildOps Challenge

## Usage

Install all dependencies

`npm install`

Run the application

`npm start`

## Setup

The project is built using the following technologies:

- Nodejs
- React
- Lambda
- DynamoDB
- AppSync
- Amplify

## AWS Services Explanation

### EC2

Install git 

```bash
sudo yum update -y
sudo yum install -y
git version
```

Install node

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
. ~/.nvm/nvm.sh
nvm install [node_version]
```

NOTE: if while trying to run mpn install an error regarding permissions appears, change the repository owner to the one who can run npm command.

```bash
sudo chown -R $(whoami) repo-directory/
```

Install pm2

```bash
sudo npm install pm2 -g
```


NOTE: if for any reason, after nginx has been installed, the server still does not show the nginx index, run the following commands: 

```bash
sudo fuser -k 80/tcp
sudo fuser -k 443/tcp

sudo service nginx restart
```

This is because sometimes apache is still running on those ports.



### AWS CLI

Check that Python version is 2.7+ or 3.4+

Install AWS CLI version 1 using the bundled installer

```bash
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
```

Note: if you don't have unzip, use your favorite package manager or an equivalent to install it.

Run the install program. This enables users to call the AWS CLI by typing aws from any directory.

```bash
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
```

Note: if you want to use a specific version of python run:

```bash
$ sudo /usr/local/bin/python3.7 awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
```

Check the installation by running `$ aws --version`

Configure the AWS CLI

```bash
$ aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bfiCYEXAMPLEKEY
Default region name [None]: us-east-1
Default output format [None]: ENTER
```

### Lambda

Lambda allows running code without taking care of provisioning servers.

### Amplify

Amplify is a development platform for building mobile and web applications.

Using Amplify CLI it is possible to develop and integrate applications with AWS services during development
reducing the amount of time in configuring those services.

#### Basic Usage

Install AWS Amplify CLI

`npm i -g @aws-amplify/cli`

Configure with AWS account

`amplify configure`

Add Amplify to a project (in project root folder)

`amplify init`

Add API to project (REST or GraphQL)

`amplify add api`

Push changes to generate GraphQL API

`amplify push`

#### Usage with React

Install the following packages

`npm install aws-amplify aws-amplify-react`

### AppSync

AppSync is a development service which allows to integrate multiple data sources with AWS to be consumed by applications.
It includes NoSQL data stores, relational DBs, HTTP APIs, custom data sources with Lambda.
For mobile and web apps, it additionally provides local data access when devices gon offline, and data synchronization

![How it works](aws-appsync-arch.png)

### Serverless

Serverless is a development framework to create serverless instances for AWS Lambda service using common server templates.

Install the serverless framework

`npm install -g serverless`

Create a new project using a template

`sls create -t aws-nodejs`
