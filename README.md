# tiago.carreira.pw

This is the repo building the website at https://tiago.carreira.pw

Built with [Hugo](https://gohugo.io), with [Toha theme](https://github.com/hugo-toha/toha)


## Requirements

In order to run the theme locally, you must have the following tools installed.

- Hugo version v0.118.x (extended) or later.
- Go language version v1.18.x or later.
- Node version v18.x and npm version 8.x or later.

Make sure you have the required tools installed to the proper version using the following commands.
```
# Check Hugo version
➜ hugo version
hugo v0.118.2+extended linux/amd64 BuildDate=unknown

# Check Go version
➜ go version
go version go1.19.4 linux/amd64

# Check Node version
➜ node -v
v18.12.1

# Check NPM version
➜ npm -v
8.19.2
```


## Run locally

```
# a. Load Hugo modules
hugo mod tidy

# b. Install node modules
hugo mod npm pack
npm install

# c. Run the site
hugo server -w
```
