# Synthesis of the problem with PDFTRON / IPAD and webviewerServerURL

- Page Width of a document is different on Ipad when using webviewerServerURL, compared to regular browsers (Chrome on laptop, etc...).
- There is no problem (the dimensions are the same between Ipad Safari and Laptop Chrome) using only client webviewer without webviewerServerURL

![image](https://user-images.githubusercontent.com/25119847/208996194-97743f14-e1a4-48bf-9076-52212878684c.png)
![image](https://user-images.githubusercontent.com/25119847/208996136-9afd7c86-89a8-4f1b-9e2f-349c401dcce7.png)


# Process to replicate the bug of pdftron dimensions on IPad

Screenshots of the problem can be found here: https://www.notion.so/clovisteam/Clovis-PDFTRON-bug-af9be9cb33c24ee0a0d9218324dfda99

## Preliminary installations

- Use an Apple device (Macbook Pro, Imac, etc...)
- Install XCode (last version): https://apps.apple.com/fr/app/xcode/id497799835?mt=12
- Install Docker (last version): https://docs.docker.com/get-docker/
## Process
### 1: Start the React App
> run `npm install && npm run docker-start && npm run start`
(to stop the pdftron docker container just run `npm run docker-stop`)

It will:
- build the pdftron webviewer server docker container
- run the react app on `localhost:3000`

### 2: Start the Ipad Simulator and run the app inside
> run `open -a simulator`

It wil open the simulator app of XCode, then go to `File > Open Simulator > [Choose a recet Ipad Pro]`
After the Ipad Simulator is up, open inner Safari app and go to `localhost:3000`

### 3: Run the app inside Chrome on your machine
Go to `localhost:3000` inside your Chrome browser (out of the Simulator of course)

### 4: Perform PDFTRON tests

In both Safari (Simulator) and Chrome (Computer)

- Refresh the page
- Boom you will see an alert()

Result:
- On Chrome you will see a Width of `595` for page 1
- On Ipad you will see a Width of `793` for page 1 (but it displays `595` the first time the document is rendered, then every time it's `793`).

So the dimensions and width of a document is not consistent between devices, causing us big problems of location on documents thru pdftron.
