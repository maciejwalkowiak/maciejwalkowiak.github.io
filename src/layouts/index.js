import React from 'react';
import Helmet from 'react-helmet'
import 'prismjs/themes/prism-solarizedlight.css';
import '../css/style.css';
import '../css/normalize.min.css';
import '../css/social-circles.css';
// import '../css/prism-dracula.css';

class Template extends React.Component {
    render() {
        const {location, children} = this.props
        let header

        let rootPath = `/`
        if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
            rootPath = __PATH_PREFIX__ + `/`
        }

        return (
            <div>
                <Helmet>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                    <title>Maciej Walkowiak - Software Consultant - Java, Spring, React, AWS</title>
                    {/*<link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900" rel="stylesheet"/>*/}
                    {/*<link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono" rel="stylesheet"/>*/}
                </Helmet>
                {children()}
            </div>

        )
    }
}

Template.propTypes = {
    children: React.PropTypes.func,
    location: React.PropTypes.object,
    route: React.PropTypes.object,
}

export default Template
