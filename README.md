# Electron Boilerplate

Um boilerplate básico para projetos com Electron

# Versão
 - Node : 12.4.0

# Features

 - Auto reload com [nodemon](https://www.npmjs.com/package/nodemon)
 - Gerenciador de estados da janela com [electron-window-state](https://www.npmjs.com/package/electron-window-state)  

# Comandos
Scripts do package.json
## Para rodar o projeto
```shell
npm start
```

## Para rodar o projeto com nodemon
```shell
npm run watch
```
*para dar restart depois de fechar o app, é só escrever no promp de comando
```shell
rs
```

## Para debugar
```shell
npm run inspect
```
depois siga os seguintes passos :
 

 1. no Chrome abra **chrome://inspect**
 2. clique em **Configure**, logo ao lado de Discover network targets
 3. adicione **localhost:5858** e clique em **done**
 4. Na parte de Remote Target clique em **inspect**
 5. Faça o programa parar no **breakpoint** 
  
 Ex :
Crie antes do evento de 'closed' :
 ```javascript
mainWindow.on('close', () => {
    debugger
  })
```

Se você quer debugar coisas como require, etc, é necessário outro comando :
*Lembre-se que o programa só starta depois de liberado o breakpoint
```shell
npm run inspect-brk
```
# Todo

 - [ ] Adicionar scripts de build com electron-builder