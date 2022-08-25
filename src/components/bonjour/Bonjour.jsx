import "./Bonjour.css"

const Bonjour = (props) => {

    const {name, age} = props

    return (
        <div>
            <p className="bienvenue">Bienvenue {name} sur l'application React</p>
            <p className={age <= 18 && "red"}>Vous avez {age} ans</p>
            <p className={age > 18 ? "blue" : "red"}>Vous avez {age} ans</p>
            {age > 18 ? (
                <p className="blue">Vous avez {age} ans</p>
            ) : (
                <p className="red">Vous avez {age} ans</p>
            )}
        </div>
    )
}

Bonjour.defaultProps = {
    age: 18
}

export default Bonjour