const SerialCommander = require('@westh/serial-commander');


const serialCommander = new SerialCommander({
    port: '/dev/ttySOMETHINGCOOL', // defaults to /dev/modem
    baudrate: 9600, // defaults to 115200
    disableLog: false, // defaults to false
    defaultDelay: 50, // delay [ms] before the command is issued defaults to 100
    log: string => console.log(`[${new Date().toISOString()}] ${string}`) // default logging function
})

async function main () {
    const options = {
        expectedResponses: ['+CNUM', 'YEAH'], // defaults to ['OK']
        timeout: 500,  // defaults to 1000
        delay: 100 // defaults to defaultDelay set in the constructor
    }
    const response = await serialCommander.send('AT+CNUM', options)
    console.log(response)
    serialCommander.close()
}

main()
