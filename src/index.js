const { app, BrowserWindow, Menu } = require('electron');
const url= require ('url');
const path= require ('path');
const { dirname } = require('path');

if (process.env.NODE_ENV ) 
require ('electron-reload')(__dirname,{
    electron: path.join(__dirname,'../node-modules', '.bin', 'electron')

})

let mainwindow 

app.on ('ready', () => {
    mainwindow = new BrowserWindow ({});
    mainwindow.loadURL(url.format({
        pathname : path.join (__dirname, 'views/index.html'),
        protocol :'file',
        slashes : true
}))

const mainMenu = Menu.buildFromTemplate(templateMenu);
Menu.setApplicationMenu(mainMenu);

mainwindow.on('closed', () => {
   app.quit(); 
})
});

const templateMenu = [
          
    {
        label:'',
        accelerator:'Ctrl+Q',
        click() {
            
        }
    }
]


