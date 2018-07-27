import React from 'react';
import logo from '../../logo.png';
import './style.css';

export class MfxTopNav extends React.Component {
    state = {};

    onChange(event) {
        const searchText = event.target.value;
        this.setState({ searchText });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSearch(this.state.searchText);
    }

    render() {
        return (
            <div className="mfx-top-nav">
                <img alt="Mattflix logo" className="mfx-top-nav__logo" src={logo} />

                <form className="mfx-top-nav__form" onSubmit={this.onSubmit.bind(this)}>
                    <input className="mfx-top-nav__input" onChange={this.onChange.bind(this)} value={this.state.searchText} />
                </form>
            </div>
        );
    }
}