import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { removeCounter } from '../actions';

class RemoveCounter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container'>
                <form>
                    <div className='field is-grouped'>
                        <div className='control'>
                            <button className='button is-primary'
                                onClick={ e=> {
                                e.preventDefault();
                                this.props.dispatch(removeCounter())}}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(removeCounter, dispatch) }
}

export default connect(mapDispatchToProps(RemoveCounter));