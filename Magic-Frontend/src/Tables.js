import React from 'react';
import './App.css';

export default class Tables extends React.Component {
    state = {
        loading: true,
        information:null,
    };

    async componentDidMount() {
        const url = "https://reqres.in/api/users?page=1";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.data[0], loading: false });
        console.log(data);
    }
    render() {
        return (
            <div>
                {this.state.loading ? <div>loading..</div> :
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First_Name</th>
                                    <th>Last_Name</th>
                                    <th>email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.person.id}</td>
                                    <td>{this.state.person.first_name}</td>
                                    <td>{this.state.person.last_name}</td>
                                    <td>{this.state.person.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>}
                </div>
        );
                }
}


