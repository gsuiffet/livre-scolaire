var React = require('react');

class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="mui-container">
                <table>
                    <tbody className="mui--appbar-height">
                    <tr>
                        <td className="mui--text-title" id="logo">Le Livre Scolaire</td>
                        <td className="mui--text-right">
                            <ul className="mui-list--inline mui--text-body2">
                                <li><a href="#">Exercices</a></li>
                                <li><a href="#">Elèves</a></li>
                                <li><a href="#">Classes</a></li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = Header;