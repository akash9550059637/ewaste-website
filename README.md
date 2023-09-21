# ewaste-website
Ewaste-website
file should be arranged in a directory as follows:
ewaste-website/
-->Public/
     -->index.html
     -->styles.css
     -->register.html
     -->login.html
     -->register.js
     -->database.db
   
-->src/
    -->components/
       -->EducationalContent.js
       -->EducationalLocator.js
       -->UserRegistration.js
    -->App.js
    -->index.js
    -->recycle.jpg
  
-->server/
    -->pacakge.json
    -->server.js
   
-->package.json   


pre-requiremnt commands before running the above code in your local system following commands need to be runned in the cmd prompt:

1. change the directory to the ewaste-website.
2. npm init -y
3. node server.js
4. npm install -g live-server
5. npm install express sqlite3
6. npm install express body-parser
   final command to run the html page locally in the browser
7. live-server

Note: make sure the path in the cmd prompt directs to the public folder in the ewaste-website.
 final path looks like : **C:\Users\ewaste-website\public\live-server.**
