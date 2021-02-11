export default class User {
    _name: string
    _signUpDate: Date
    _uuid: string
    _location: Location
    _imageURLs: ImageURLs

    constructor(responseJSON: ResponseJSON) {
        this._name = responseJSON.name.first + responseJSON.name.last
        this._uuid = responseJSON.login.uuid
        this._location = responseJSON.location
        this._signUpDate = new Date()
        this._imageURLs = responseJSON.picture
    }

    // Maybe add other CRUD actions here...

    get name(): string {
        return this._name
    }

    get signUpDate(): Date {
        return this._signUpDate
    }

    get uuid(): string {
        return this._uuid
    }

    get generalLocation() {
        return `${this._location.city}, ${this._location.state}`
    }

    getImageURL = ( size: 'large' | 'medium' | 'thumbnail' ) => {
        return this._imageURLs[size]
    }
}

interface Location {
    street: string
    city: string
    state: string
    postalcode: string
}

interface FullName {
    title: string
    first: string
    last: string
}

interface Login {
    uuid: string
}

interface ImageURLs {
    large: string
    medium: string
    thumbnail: string
}

export interface ResponseJSON {
    name: FullName
    location: Location
    login: Login
    picture: ImageURLs
}