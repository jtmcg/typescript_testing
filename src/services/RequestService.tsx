
export default class RequestService {
    apiEndpoint: string
    response: Response
    
    constructor(apiEndpoint: string) {
        this.apiEndpoint = apiEndpoint
        this.response = {}
    }

    getRequest = async () => {
        const xhr = new XMLHttpRequest()

        return new Promise( (resolve, reject) => {
            xhr.onreadystatechange = () => {
                if ( xhr.readyState !== 4 ) return
                if ( xhr.status >= 200 && xhr.status < 300 ) {
                    this.response = xhr.response
                    resolve(xhr)
                } else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    })
                }
            }
            
            xhr.open('GET', this.apiEndpoint)
            xhr.responseType = 'json'
            xhr.send()
        })
    }

}

// Should probably update to a generic
interface Response {
    results?: []
}