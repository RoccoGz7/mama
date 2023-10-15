
class ProyectService {

    constructor() {
        this.URI = '/api/proyects';
    }

    async getProyects() {
        const response = await fetch(this.URI);
        return await response.json();
    }

    async postProyect(project) {
        await fetch(this.URI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
    }

    async deleteProyect(id) {
        await fetch(`${this.URI}/${id}`, {
            method: 'DELETE',
        })
    }

    async approvedProject(id, etapaComercial) {
        await fetch(`${this.URI}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ etapaComercial })
        })
    }
}

export default ProyectService;