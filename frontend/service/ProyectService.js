
class ProyectService {

    constructor() {
        this.URI = 'https://localhost:4000/api/proyects';
    }

    async getProyects() {
        const response = await fetch(this.URI);
        return await response.json();
    }
}

export default ProyectService;