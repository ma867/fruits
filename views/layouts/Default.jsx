const React = require('react')

class Default extends React.Component {
  render () {
    const { title } = this.props
    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel='stylesheet' href='/css/app.css' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css' />
          <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' />
        </head>

        <body className='bg-light'>
          <main>
            <section id='cards'>
              <div className='container py-2'>
                <div className='row pb-4'>
                  <div className='col-12 text-center'>
                    <div className='display-3'>Fruits!</div>

                    <nav>
                      <a href='/fruits'><i className='fa-solid fa-home' /> Home</a>
                      <a href='/fruits/new'><i className='fa-solid fa-square-plus' /> Create New Fruit</a>
                    </nav>
                  </div>
                </div>
                <div className='row'>
                  {this.props.children}
                </div>
              </div>
            </section>
          </main>
        </body>
      </html>
    // <html>
    //     <head>
    //         <title>{title}</title>
    //         <link rel="stylesheet" href="/css/app.css"></link>
    //     </head>
    //     <body>
    //         <nav>
    //             <a href="/fruits">Go to Home Page For Fruits</a><br />
    //             <a href="/fruits/new">Create a New Fruit</a><br />
    //             { fruit? <a href={`/fruits/${fruit._id}/edit`}> {fruit.name} Edit Page </a> : ''} <br />
    //             { fruit? <a href={`/fruits/${fruit._id}`}>{fruit.name} Show Page</a> : ''} <br />
    //         </nav>
    //         <h1>
    //             {title}
    //         </h1>
    //         {this.props.children}
    //     </body>
    // </html>
    )
  }
}

module.exports = Default
