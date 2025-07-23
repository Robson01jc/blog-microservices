Startar minikube:
- minikube start

Carregar uma imagem no mikube:
- minikube image load IMAGE_NAME:TAG

kubectl delete -f infra/k8s/
kubectl apply -f infra/k8s/

docker push robsonrc/posts

kubectl rollout restart deployment <<deployment_name>>

minikube ip

minikube service posts-srv