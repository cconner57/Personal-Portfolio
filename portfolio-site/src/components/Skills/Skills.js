import React, { Component } from 'react'
import '../../App.css'

class Skills extends Component {
    render() {
        let array = ['html5.png', 'css.png', 'javascript.png', 'react.png', 'angular.png', 'express.png', 'node.jpg', 'mongodb.png', 'mysql.png', 'python.png', 'sass.png', 'aws.png'];

        let images = array.map(image => {
            return <img key={image} src={require(`../../../public/images/skills/${image}`)} alt="Programming Language" height='75' className="img-responsive" />
         });
 
         return (
            <div className="container" style={{height: 3000}}>
                <span class="anchor" id="skills"></span>
                <h1>Skills</h1>
                <footer className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus nisl at nibh cursus, ac sodales mi lobortis. Cras finibus tincidunt varius. Maecenas a quam lectus. Nunc molestie sem orci, sed sagittis velit auctor eu. Quisque condimentum laoreet tristique. Proin nec ipsum tellus. Donec eu commodo lorem, non sodales est. Donec et vestibulum lorem. Nulla fringilla erat nec magna venenatis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel sagittis risus. Etiam porttitor interdum enim non gravida. Duis tincidunt elementum fringilla. Nunc viverra dui a lobortis vulputate. Nulla eu venenatis lorem.</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                       { images }
                    </div>
                </footer>
            </div>
        );
    }
}

export default Skills