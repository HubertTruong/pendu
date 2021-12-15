import React, { useEffect, useState } from 'react'

const GOOD_LETTER = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbnéàâêè";
function CallApi() {
    const [word, setWord] = useState(undefined);
    useEffect(()=> {
        (async() => {
            const { data } = await getWord();
            setWord(data);
            console.log(data);
        })();
        return () => {};
    }, []
    );

const handleKeyDown = (event) => {
    if(GOOD_LETTER.includes(event.key)) {
        console.log("A key was pressed", event.key);
    }
};

useEffect(()=> {
    window.addEventListener("keydown", handleKeyDown, false);
    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
}, []);

const getWord = async () => {
    const dataJson = await fetch('https://animalfinderapi.herokuapp.com/word');
    return await dataJson.json();
};

if(!word){
    return <p>Waiting...</p>
}

return (
    <div>
        <p>{word.word.charAt(0)}</p>
    </div>
)

}

export default CallApi