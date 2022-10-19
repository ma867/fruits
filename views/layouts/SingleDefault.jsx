const React = require('react');

class SingleDefault extends React.Component {
    render(){
        const {fruit, title} = this.props
        return(





            
            <html>
                <head>
                    <title>{title}</title>
                    <link rel="stylesheet" href="/css/app.css"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
                </head>
            

                <body className="bg-light">
                    <main>
                        <section id="cards">
                            <div className="container py-2">
                                <div className="row pb-4">
                                    <div className="col-12 text-center">
                                        <div className="display-3">Fruits!</div>
                                            <nav>
                                                <a href={`/fruits`}><i className="fa-solid fa-home"></i> Home</a>
                                                <a href={`/fruits/new`}><i className="fa-solid fa-square-plus"></i> Create New Fruit</a>
                                            </nav>
                                        </div>
                                    </div>
                                    <br /><br /><br /><br />
                                    <div className="row pb-4 justify-content-center">
                                        <div className="col-7">
                                            <div className="card shadow-sm border-0">
                                                <div className="card-body">
                                                    {this.props.children}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>
                    </main>
                </body>
            </html>
        )
    }
}

module.exports = SingleDefault