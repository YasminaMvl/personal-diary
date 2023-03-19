import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Main extends Component {
    render() {
        return (
            <div>
                <div className='diary-app'>
                    <h1>Dear diary</h1>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Main)