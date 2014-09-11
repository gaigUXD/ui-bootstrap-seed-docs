# Exercise 2

## Download and Configure the Seed Project

The latest version of the seed project can be downloaded here:

**[Download Zip](https://github.com/gaigUXD/ui-bootstrap-seed/archive/master.zip)**
    
Once the download completes, unzip the files and place the extracted folder
(*ui-bootstrap-seed-master*) in your working directory (*e.g. C:/Projects*).

### Rename the folder

Give the extracted folder an appropriate name, such as `client-manager`.

### Open the project in your editor

You are now ready to begin editing files. Open the project in your preferred editor or IDE. We
recommend [Webstorm](http://www.jetbrains.com/webstorm/) and will be using it throughout the course
of these exercises.

### Configure your package file

Located in the root folder of your project is a file named `package.json`. This file is used to give
information to **NPM** that allows it to identify the project as well as handle the project's
dependencies. A list of these dependencies is maintained in the `devDependencies` object. Each
dependency is a third party [Node Packaged Module](https://www.npmjs.org/). We are also using this
file to store other metadata such as the name and description of the project, the current version,
the path to the uiBootstrap CDN and the version of uiBootstrap you wish to use in your project.

![package.json](images/package.json.png)

Give the `name` and `description` appropriate values such as `client-manager-app` and
`A simple client management application`.

### Configure your gulp build

Located in `./gulp` is a `config.js` file that you will use to configure your gulp build. Values
such as the main AngularJS module name, webserver port, and paths to any additional JavaScript files
you may need are defined here.

Open `config.js` and give `config.app` an appropriate value, such as `clientManager`. You may also
optionally change the webserver port by modifying `config.webserver.port`.

