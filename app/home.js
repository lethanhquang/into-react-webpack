//libs
import React from 'react/addons';

//component
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
          <h1>Hello, world!</h1>
          <p>This example is a quick exercise to illustrate how the webpack, React work. It includes the bootstrap framework, ES6 babel compiler and SASS. It's just a first dummy version.</p>
          <p>
            <a className="btn btn-lg btn-primary" href="#" role="button">HAVE FUN</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Home;
