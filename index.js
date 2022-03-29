const notTranslatedL = document.querySelector('#not-translated-lang')
const notTranslatedT = document.querySelector('#not-translated-text')

const translatedL = document.querySelector('#translated-lang')
const translatedT = document.querySelector('#translated-text')

const botao = document.querySelector('.subm')

botao.addEventListener('click', async () => {
        const config = {
            ntl: notTranslatedL.value,
            ntt: notTranslatedT.value,
            tl: translatedL.value
        }
        
        const translated = await requestTranslate(config)
        translatedT.value = await translated
})

async function requestTranslate(config) {
    try {
        const apiReq = await fetch('https://libretranslate.de/translate', {
            method: 'POST',
            body: JSON.stringify({
                q: config.ntt,
                source: config.ntl,
                target: config.tl,
                format: 'text'
            }),
            headers: { "Content-Type": "application/json"}
        })
    
        let jsonResponse = await apiReq.json()
        return await jsonResponse.translatedText    
    }  catch(err) {
        console.error('Houve um erro durante a execução do código: ', err)
    }
}