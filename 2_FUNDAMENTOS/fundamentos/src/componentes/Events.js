const Events = () =>{

    const handleMyEvent = (e) => {
        console.log("🚀 ~ file: Events.js:4 ~ handleMyEvent ~ e:", e)
        console.log("🚀 ~ file: Events.js:6 ~ Ativou o evento!:", handleMyEvent)
    };

    const renderSomething = (x) => {

        if(x) {
            return <h1>Renderizando isso!</h1>

        } else {
            return  <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui também! 2</button>
                <button onClick={() => {
                    if(true){
                        console.log("Isso não deveria existir =)")
                    }
                }}>Clica aqui, por favor!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
};

export default Events;