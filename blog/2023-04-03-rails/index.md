---
slug: how-to-get-started-with-rails
title: How to get started with Rails on Humalect platform
authors: [Priyansh]
tags: [Ruby]
---

Ruby on Rails is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.

In this tutorial, we will see how can we deploy a sample Rails application in a few clicks using the Humalect platform.

<!--truncate-->

Let's get started!

### Example Rails application 

Fork [THIS](https://github.com/Humalect/simple-rails-app) sample Rails repository to get started.

This Rails application exposes a static API that return a static response and runs on port 3000.

### Humalect Account Setup

:::tip
Please skip to point 5 if you have setup your Humalect account and have a functional K8s cluster.
:::

1. **Sign up**: visit https://humalect.com and sign up. Complete the registration flow and log in.

2. **Integrate your Cloud Provider**: Connect AWS/Azure by visiting [THIS](https://console.humalect.com/user/integrations) link and following their respective workflows.

3. **Integrate your source code provider**: Visit [THIS](https://console.humalect.com/user/integrations) link, follow the respective workflow to connect Bitbucket/Github/GitLab.

4. **Create a Kubernetes Cluster**: Create a k8s cluster by referring to our [AWS](../Clusters/create-an-AWS-cluster) or [Azure](../Clusters/create-an-Azure-cluster) docs.

5. **Create an environment**

An environment is a logically isolated k8s namespace that contains all your deployment related entities for a pipeline.

Create an environment for your Rails application. Check for various options that need to be configured to create a new environment or use an existing one.

:::info

These are some important fields:
- Name of the environment that you wish to created: can be dev, prod or test etc.
- Cluster in which you want to create this environment.
- The namespace in the k8s cluster that will host this environment.
:::

<!-- ![node-app-env-creation](./go-app-env-creation.png) -->

6. **Create a project**.

A project maps the cluster and the code repository which needs to be deployed.

Refer the image below for various options that need to be configured to create a project.

![rails-app-project-creation](./rails-app-project-creation.png)

7. **Create a pipeline**.

After creating your project, let's now create a pipeline to define few of the below things for our deployment:

- The subdomain on which you need your deployment to go live.
- The port on which your code runs.
- The branch from your code repo that you want to deploy.
- The environment that you want to deploy to.
- Whether you want to enable continuous deployments.
- The environment variables for your app.

Refer the image below for various options that need to be configured to create a pipeline.

![rails-app-pipeline-creation](./rails-app-pipeline-creation-1.png)

next,

![rails-app-pipeline-creation](./rails-app-pipeline-creation-2.png)

***Advanced Options***:

- You can use the Dockerfile available in the git repo, check the box **use Docker from source code**.
- Leave the autogenerated k8s YAML files, you can edit them if you wish (this can break things, edit only if you are aware of consequences)

Refer the image below for advanced options related to a pipeline.

![rails-app-pipeline-advanced](./rails-app-pipeline-advanced.png)

8. **Deploy pipeline**.

Once your pipeline is created, hit the **deploy pipeline** button to deploy your app.
If you have enabled continuous deployments while pipeline creation, all your future commits will be automatically deployed.

Refer image below for pipeline deployment.

![rails-app-deploy-pipeline](./rails-app-deploy-pipeline.png)

9. **See that your app is live**.

Hit the **See Deployment** link next to your latest deployment and it will take you to the URL of your deployed application. The SSL certificates are auto-generated for you.

Refer image below for live deployment.

![rails-app-live](./rails-app-live.png)

10. **Check logs and metrics**.

Hit the **Show Metrics and Logs** button to view happenings of your latest deployment.

Refer image below for live deployment logs and metrics.

![rails-app-logs-metrics](./rails-app-logs-metrics.png)

We are done!

Happy deploying!

