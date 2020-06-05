


    class GetInfo{
        constructor(){
            this._URL = "https://anapioficeandfire.com/api/"
        }
        async getAllCharacters () {
            const newFetch = await fetch(this._URL+"characters")
            if(newFetch.status !== 200){
                throw new Error ("We hawe a problem on fetching")
            } else {
                const result = await newFetch.json()
                    .then(data => console.log(data))
            }
        }

        async getAllBooks () {
            const newFetch = await fetch(this._URL+"books")
            if(newFetch.status !== 200){
                throw new Error ("We hawe a problem on fetching")
            } else {
                const result = await newFetch.json()
                    .then(data => console.log(data))
            }
        }
        async getAllHouses () {
            const newFetch = await fetch(this._URL+"houses")
            if(newFetch.status !== 200){
                throw new Error ("We hawe a problem on fetching")
            } else {
                const result = await newFetch.json()
                    .then(data => console.log(data))
            }
        }
    }


    const charact = new GetInfo;

    charact.getAllCharacters()
    charact.getAllBooks()
    charact.getAllHouses()

    // fetch("https://anapioficeandfire.com/api/characters")
    //     .then(res => res.json())
    //     .then(data => console.log(data))