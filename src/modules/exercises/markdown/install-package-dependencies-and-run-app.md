# Exercise 3

## Install Package Dependencies and Run App

You will now install the package dependencies. In the previous step we configured the `package.json`
file. We will now run a command that will read the `devDependencies` object and download the
dependency files that have been predefined for our project.

### Navigate to your project's root directory

Inside your command prompt or terminal, navigate to the location of your project files:

    Windows Users
    cd C:/Projects/client-manager
    
    OSX Users
    cd ~/Projects/client-manager
    
*Heads up: If you chose a different location for your project, you will need to modify your `cd`
command above to match your project's location.*

### Install node packaged modules

You can now run the install command for NPM:

    npm install
    
This process typically takes a minute or two and creates a `node_modules` folder inside the root
of your project. Because this folder contains library code, *you will never be modifying the content
of any of these files* (unless you are debugging something).

### Execute the build

We can now run the build tasks:

    gulp
    
This process will remain running in the background to watch your project for any changes. If at any
time you need to kill this process, you can do so by pressing `ctrl+c`.

Inside your root project folder, you should now have a folder called `build`. This folder contains
the files generated by the build tasks and are the actual files that are served by the webserver.
** *The files inside this folder should never be modified. Each time you run the gulp tasks, this
folder is deleted and regenerated.* **

### View your app in a browser

You can now view the running application by opening a web browser and navigating to:

    http://localhost:9000
    
*Heads up: The gulp task must remain running at all times or you will not be able to view the
running app*

![seed project preview](images/seed-project-preview.png)