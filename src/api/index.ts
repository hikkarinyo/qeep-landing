const baseURL = `https://demo.qeep.pro/process/application`

export const sendApplication = async (formData: FormData) => {
    try {
        const response = await fetch(baseURL, {
            method: 'POST',
            body: formData
        })
        return await response.json()
    } catch (error) {
        throw error
    }
}