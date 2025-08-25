## Kubernetes commands

- Start minikube:  
`minikube start`

- Push image to docker hub:  
`docker push robsonrc/posts`

- Load image to mikube:  
`minikube image load IMAGE_NAME:TAG`

- Restart a service:  
`kubectl rollout restart deployment posts-depl`

- Expose service to access from outside the cluster:  
`minikube service posts-srv`

- Apply and delete config files:  
`kubectl apply -f infra/k8s/`  
`kubectl delete -f infra/k8s/`

- Get cluster ip address:  
`minikube ip`

- Troubleshoot pod:
`kubectl describe pod <<pod_name>>`

- Connect to a NodePort service:
`minikube service <name-service> --url`

- Open a tunnel:
`minikube tunnel`

- Restart Docker engine:
`systemctl --user restart docker-desktop`