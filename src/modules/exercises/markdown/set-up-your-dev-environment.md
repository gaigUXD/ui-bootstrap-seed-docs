# Exercise 1

## Set Up Your Dev Environment

The seed project relies on [node](http://nodejs.org/), [git](http://git-scm.com/),
[gulp](http://gulpjs.com/), and [bower](http://bower.io/) to manage dependencies and the build
process. This exercise will guide you through the installation of these tools. If you have
already installed these tools, you can [skip to exercise #2](#/exercises/2).

### Install node (and NPM)

Node allows you to run Javascript on the server and comes bundled with the node package manager
(NPM). You can check if you have node and NPM installed by opening a command prompt or terminal and
typing:
 
    node --version && npm --version

If you do not have node installed, navigate to the [download](http://nodejs.org/download) page and
download and run the appropriate installer.

### Install git

NPM uses git to pull down package dependencies. You can check if you have git installed by opening a
command prompt or terminal and typing:

    git --version
    
If you do not have git installed, installation files are available:

- [Windows installer](http://msysgit.github.io/)
- [OSX installer](http://sourceforge.net/projects/git-osx-installer/)

### Install gulp

[gulp](http://gulpjs.com) is a task/build runner that the seed project uses to pre-process and
package all of the front-end files. You can check if you have gulp installed by opening a command
prompt or terminal and typing:

    gulp --version
    
If you do not have gulp installed, you can use npm (installed in the previous step) to pull down the
gulp files. Inside your command prompt or terminal, type:

    npm install -g gulp
    
This will install gulp globally (*-g*) on your system. If you receive an error, it may be necessary
to run the install command as an administrator:

- *Windows users*: Ope the start menu and type `cmd`. The search will return a result for the
command prompt. Right click on the command prompt and choose `Run as administrator`. When the
command prompt opens, re-run the `npm install -g gulp` command.

- *OSX users*: Run the command with sudo  - `sudo npm install -g gulp`. You will then be prompted to
enter your OSX user account password. After doing so, the installation will proceed.

### Install bower

Bower is a package manager used to fetch and install front-end assets such as frameworks, libraries,
etc. You can check if you have bower installed by opening a command prompt or terminal and typing:

    bower --version
    
If you do not have bower installed, you can use npm to pull down the bower files. Inside your
command prompt or terminal, type:

    npm install -g bower
    
This will install bower globally on your system. If you receive an error, it may be necessary to run
the install command as an administrator (see the previous gulp instructions if you do not know how
to do this).