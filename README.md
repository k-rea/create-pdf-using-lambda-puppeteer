# create-pdf-using-lambda-puppeteer

---

## Feature
- Create pdf using Lambda function
- Puppeteer is used for PDF rendering process
- The created PDF supported Japanese Font.

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
make build-dev # Build docker image.
make push-dev # Push image to ECR.
make sls-deploy # sls deploy
```

 [cf. AWS Lambda の新機能 – コンテナイメージのサポート](https://aws.amazon.com/jp/blogs/news/new-for-aws-lambda-container-image-support/)
 
## Test API

```shell
http
```