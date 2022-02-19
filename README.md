# MEAN-Stack-Web-App

This app Is exactly what the title says it is. MEAN Stack Web App is a
template that I use for node-based projects  that require a mean stack architecture.

**IMPORTANT** 
If you choose to fort this project and use it for yourself, make sure to follow the   
steps below in order to update the dependencies B before running any tests before 
running any tests.

Otherwise, there is a good chance that you’ll be doing a little more than wasting 
your time getting it running. It’s anyone’s guess how long it has been since the  
repo was last updated, And node configurations are notorious for needing constant  
dependency updates  in order to remain safe for deployment in a public setting.

The version of the app that you fork may or may not have a pre-populated
node-modules directory. If the directories is present in your project, and there
are other directories inside of it, start off by deleting them.  hopefully, I will 
have remembered to add an exclude file, and this step will already be done for you. 

The next time you node checks and builds the app's dependencies, the directories will
automatically be regenerated, and the new version should be up-to-date, so long as 
the steps listed here are followedthe steps listed here are followed.

At the time of writing, I believe that most if not all of the package dependencies
can safely use it's latest version. However, Be aware that this may change in the future.

To get this affect, open the file package that Jason and make sure that there are no
dependencies listed with the expression **< X.X** or **<= X.X** where **X.X** is a number.
"greater than" Type dependencies are OK, just not the "less than" type.

Once you have all these removed, save and close the package.json file. 

Now, you just need to delete the file called package-lock.json. 
This is another file that will be regenerated in an updated version by NPM.

The project is now ready to be worked with! Running run
               $  npm install 
Then kick back and watch the generation magic happen!!!
