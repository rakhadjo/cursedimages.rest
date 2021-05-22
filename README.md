# cursedimages.rest

<p align="center">
  
![Build](https://github.com/rakhadjo/cursedimages.rest/actions/workflows/node.js.yml/badge.svg)
![License](https://img.shields.io/github/license/rakhadjo/cursedimages.rest.svg)
![Issues](https://img.shields.io/github/issues/rakhadjo/cursedimages.rest.svg)
![Stars](https://img.shields.io/github/stars/rakhadjo/cursedimages.rest.svg)
![Forks](https://img.shields.io/github/forks/rakhadjo/cursedimages.rest.svg)

</p>
Images API for the eternally damned. Also provides a REST Interface

Simpler version of the OG [cursed images API](github.com/rakhadjo/cursed_images_api) (now archived) that runs on ExpressJS (originally Spring)

### Usage

For the general view, visit `localhost:3000` for a user-friendly version. Else call upon the API itself:

Perform a `GET` request:
```sh

$ curl localhost:3000/json

```
To return the `JSON` response of the following:
```json
{
  "image" : "https://i.redd.it/rmjbijhl14j61.jpg"
}
```

### Quickstart

1. fork & clone repository
2. `npm install`
3. run the project by calling `node app.js`

### Legal
MIT License
