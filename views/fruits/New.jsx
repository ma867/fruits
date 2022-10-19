const React = require('react')
const Default = require('../layouts/SingleDefault')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Fruit">
            <form method="POST" action="/fruits">
                Name: <input className="form-control" type="text" name="name" placeholder='Name of Fruit Here'></input><br/>
                Color: <input type="text" className="form-control" name="color" placeholder='Color of Fruit Here'></input><br/>
                Is Ready To Eat: <input className="checkbox" type="checkbox" name="readyToEat"></input><br/>
                <input className="delete" type="submit" value="Submit Fruit"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New