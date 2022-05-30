############################################################
# default
############################################################

.PHONY: deploy
deploy: build-dev push-dev


############################################################
# setting
############################################################

.PHONY: sure
sure:
	npm --version
	aws --version
	docker --version
	direnv --version
	direnv allow

############################################################
# Build dev
############################################################
.PHONY: build-dev
build-dev:
	direnv allow
	docker build \
 		-t ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${APP_NAME}:dev \
 		-f ./Dockerfile \
 		.

.PHONY: push-dev
push-dev:
	direnv allow
	aws ecr get-login-password --profile ${PROFILE} --region ${REGION} | \
	docker login --username AWS --password-stdin ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${APP_NAME}
	docker push ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${APP_NAME}:dev

.PHONY: run-local
run-local:
	docker run -p 9000:8080 ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${APP_NAME}:dev

.PHONY: repository
repository:
	aws ecr create-repository --profile ${PROFILE} --repository-name ${APP_NAME}

