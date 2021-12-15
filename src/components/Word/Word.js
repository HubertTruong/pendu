export default function Word({currentWord, usedLetter}){
    return (
        <div>
            {currentWord.split('').map(
                letter => {
                    let status = 'finded'
                    if(!usedLetter.includes(letter)){
                        status = "not finded"
                    }
                    return <span key={letter} className={status} > {status === 'finded' ? letter : " __ "}</span>
                }
            )}

        </div>
    )
}