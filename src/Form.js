import './Form.css';
import React from "react";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {group: '', name: ''};
        this.event_name = "Субботник"

        this.handleChangeGroup = this.handleChangeGroup.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeGroup(event) {
        this.setState({group: event.target.value});
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        // alert('Отправленное имя: ' + this.state.value);
        if (!(this.state.name && this.state.group)) {
            alert("Отсутствует ФИО или группа.")
        } else {
            alert(this.state.name + " " + this.state.group)
        }
        event.preventDefault();
    }

    render() {
        return (

            <div className="bform py-5">
                <div className="row">
                    <div className="container">
                        <div className="col-lg-6 align-justify-center pr-4 pl-0 contact-form form-style">
                            <div className="">
                                <h2 className="mb-3 font-weight-light">Регистрация на {this.event_name}</h2>
                                <h6 className="subtitle font-weight-normal">Регистрация на мероприятие МТУСИ</h6>
                                <form className="mt-3" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group input-text">
                                                <input className="form-control" type="text" placeholder="ФИО" onChange={this.handleChangeName}/>
                                            </div>
                                        </div>

                                        <div className="col-lg-12" >
                                            <div className="form-group input-text">
                                                <input className="form-control" type="text" placeholder="Группа" onChange={this.handleChangeGroup}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit"
                                                    className="btn btn-md btn-block btn-danger-gradiant text-white border-0" >
                                                <span> Отправить</span></button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
