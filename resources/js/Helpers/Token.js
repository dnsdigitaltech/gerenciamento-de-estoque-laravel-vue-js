class Token {
    isValid(token) {
        const playload = this.playload(token)
        if(playload) {
            return playload.iss = "http://localhost:8000/api/auth/login" || "http://localhost:8000/api/auth/register" ? true : false
        }
        return false
    }

    playload(token) {
        const playload = token.split('.')[1]
        return this.decode(playload)
    }

    decode(playload) {
        return JSON.parse(atob(playload))
    }
}

export default Token = new Token()