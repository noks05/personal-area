
export const useUserDataStore = defineStore('userData', {
    state: () => (
        {
            img: 'https://avatars.githubusercontent.com/u/739984?v=4',
            fullName: 'Александр Лермонтов',
            country: 'Волгоград',
            date: (() => new Date())(),
        }
    ),
    actions: {
        setUserData(newData) {
            Object.keys(newData).forEach(key => {
                if (newData[key]) {
                    this[key] = newData[key]
                }
            })
        },
    },
})