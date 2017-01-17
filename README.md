# Photos (React.js and Node.js)
The app is built on top of Total.js, the Node.js framework with React as the view layer. The API is created using Total.js and React.js fetches that API to generate views.  


### Setup
Make sure you have Node.js and npm installed and run the following commands.  

```
npm install //installs the dependent packages
npm start //will fire up the server at localhost:1234
```

### Adding images
The process is not fully automated, you need to run a few scripts and copy paste to make it work, following are the instructions:   

Copy all the images you want to share to the following directory   
`public/images`  
once done run   
`npm run generate`    
This will generate thumbnails of all the images in the following directory   
`public/thumbnails`

Now run `npm run index`  this will copy the list of files as an object in the following file   
`database/list.json`

now copy that data and paste replacing all the content in  `data.nosql`   
make sure to leave an extra line after the entry 😊 and you are all set to go, run `npm start` and you have the app running and ready to share.
