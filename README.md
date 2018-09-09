# iamcolin
My personal site, me... Colin!

> A Vue based portfolio site.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Deploy

First make sure you have [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html) installed.
`brew install awscli`

Make sure the AWS key is [setup properly](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration).

```bash
#Builds and deploys to aws bucket.
npm run deploy

#Same as the deploy command but it won't sync the images.
npm run deploy-no-photos
```

---

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
