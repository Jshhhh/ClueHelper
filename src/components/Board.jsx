import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        players: state.players,
        weapons: state.weapons,
        rooms: state.rooms
    }
};

const Board = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    {
                        props.weapons.map(weapon => <th key={weapon}>{weapon}</th>)
                    }
                    {
                        props.rooms.map(room => <th key={room}>{room}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.players.map(player=> {
                        return (
                            <tr key={player}>
                                <td>{player}</td>
                                {props.weapons.map((e, i) => <td key={e + i}></td>)}
                                {props.rooms.map((e, i) => <td key={e + i}></td>)}
                            </tr>
                        );
                    })
                }
                {
                    props.rooms.map(room => {
                        return (
                            <tr key={room + 'Col'}>
                                <td>{room}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

export default connect(mapStateToProps)(Board)