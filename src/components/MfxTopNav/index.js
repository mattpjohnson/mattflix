import React from 'react';
import logoSmall from '../../logoSmall.png';
import logoLarge from '../../logoLarge.png';
import './style.css';

export class MfxTopNav extends React.Component {
    state = {
        searchText: ''
    };

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
                <img alt="Mattflix M logo" className="mfx-top-nav__logo--small" src={logoSmall} />
                <img alt="Mattflix logo" className="mfx-top-nav__logo--large" src={logoLarge} />

                <form className="mfx-top-nav__form" onSubmit={this.onSubmit.bind(this)}>
                    <input className="mfx-top-nav__input" onChange={this.onChange.bind(this)} value={this.state.searchText} />

                    <button className="mfx-top-nav__search-btn" type="submit">Go</button>
                </form>
            </div>
        );
    }
}