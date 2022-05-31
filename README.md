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
#make repository # Create ECR
#make build-dev # Build docker image.
#make push-dev # Push image to ECR.
#make sls-deploy # sls deploy
make deploy
```

## 参考
 - [ AWS Lambda の新機能 – コンテナイメージのサポート](https://aws.amazon.com/jp/blogs/news/new-for-aws-lambda-container-image-support/)
 - [Serverless FrameworkがLambda用コンテナを自動でECRにデプロイできるようになってた件](https://zenn.dev/qazx7412/articles/75862c72d6effa) 
## Test API

```shell
http POST url name=test
```