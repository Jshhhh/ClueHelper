import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';

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
                        props.weapons.map(weapon => <th key={weapon} className='rotate-header'><div><span>{weapon}</span></div></th>) 
                    }
                    {
                        props.rooms.map(room => <th key={room} className='rotate-header'><div><span>{room}</span></div></th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.players.map((player, index) => {
                        return (
                            <tr key={player}>
                                <th className='row-header'>{player}</th>
                                {props.weapons.map((e, i) => <Cell key={`${index}${i}`}/>)}
                                {props.rooms.map((e, i) => <Cell key={`${index}${i}`}/>)}
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

export default connect(mapStateToProps)(Board)