# create-pdf-using-lambda-puppeteer

---

## Usage

### Setting Environment Variables
edit ./.envrc
```shell
# ./.envrc

export APP_NAME=create-pdf-using-lambda-puppeteer
export ACCOUNT_ID=
export PROFILE=
export AWS_PROFILE=
export REGION=ap-northeast-1
```

### Install
```shell
npm install
make repository # Create ECR
make # Build docker image and Push the image to ECR.
```

### Create Lambda and Api gateway
Create Lambda function in management console.
And create event using API Gateway.

 [cf. AWS Lambda の新機能 – コンテナイメージのサポート](https://aws.amazon.com/jp/blogs/news/new-for-aws-lambda-container-image-support/)